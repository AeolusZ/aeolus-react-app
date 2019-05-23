import React, {Component} from 'react'
import practiceAction from './action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Practice extends Component {
  static propTypes = {
    actions: PropTypes.object,
    state: PropTypes.object
  }
  constructor(props) {
    console.log('1.生命周期constructor')
    super(props);
    this.state = {
      name: ''
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('2.生命周期getDerivedStateFromProps')
    //  state.length = props.history.length
    return state
  }
  componentDidMount() {
    console.log('4.生命周期componentDidMount')
    this.props.getDb().then(res => {
      console.log(res)
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('2.生命周期shouldComponentUpdate')
    console.log(nextProps, this.props)
    console.log(nextState, this.state)
    // return false就不会再重新render了
    return this.state.name !== nextState.name || this.props !== nextProps
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5.生命周期getSnapshotBeforeUpdate')
    console.log(this.props, prevProps)
    return 'haha'
  }
  componentDidUpdate(prevProps,prevState,prevSnap) {
    console.log('6.生命周期componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('7.生命周期componentWillUnmount')
  }
  // 点击按钮，state变化
  changeHandle = (e) => {
    if (e.target.value === 1) {
      this.setState({name: '回答错误！你难道不是在说翟潇闻吗？！', color: 'red'})
    } else if (e.target.value === 2 ) {
      this.setState({name: '恭喜你！答对了！', color: 'green'})
    }
    
  }
  render() {
    console.log('3.生命周期render')
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (<div>
      你眼里的刘宇是什么样子的？
      <RadioGroup onChange={this.changeHandle}>
        <Radio style={radioStyle} value={1}> 可爱且魅力四射，迷人却不失风度 </Radio>
        <Radio style={radioStyle} value={2}> 🐷头🐷脑 </Radio>
      </RadioGroup>
    <h2 style={{color: this.state.color}}>{this.state.name}</h2>
    </div>)
  }
}
function mapStateToProps(state, myProps) {
  console.log('运行mapStateToProps')
  return { 
    data: state.getIn(['practiceReducer', 'dbList']).toJS(),
    myProps 
  }
}
// 函数写法
function mapDispatchToProps(dispatch) {
  console.log('运行mapDispatchToProps')
  return {
    // 不借助辅助函数
    getDb: (...args) => dispatch(practiceAction.getDb(...args))
    // 借助辅助函数
    // actions: bindActionCreators(practiceAction, dispatch) 
  }
}

// 对象写法
// const mapDispatchToProps = {
//   ...practiceAction
// }

export default connect(mapStateToProps, mapDispatchToProps)(Practice)

