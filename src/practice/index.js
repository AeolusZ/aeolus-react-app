import React, {Component} from 'react'
// import {practiceAction} from './action'
import practiceAction from './action'
// import getDb from './action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

class Practice extends Component {
  static propTypes = {
    actions: PropTypes.object,
    state: PropTypes.object
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
    console.log(this.props.actions)
    this.props.getDb().then(res => {
      console.log(res)
    })
  }
  render() {
    console.log(this.props)
    return (<div>
    使用redux
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

