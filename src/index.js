import React, {Component} from 'react'
import FormPractice from './FormPractice'
const HINT = {
  "true" : '隐藏-green',
  "false" : '显示-red'
}
class InCome extends Component {
  constructor(props) {
    super(props);
    this.state= {
      showChild: false,
      showChildText: ''
    }
  }
  isShowChild = () => {
    this.setState({showChild: !this.state.showChild})
  }
  getChild = (e) => {
    return () => {
      this.setState({showChildText: e})
    }
  }
  render() {
    return (<div>
      <button onClick={this.isShowChild}>我是父组件</button>
      （点我，我的子组件会
      <span style={{color: HINT[this.state.showChild].split('-')[1]}}>
        {HINT[this.state.showChild].split('-')[0]}
      </span>）
      <br/>
      我的孩子向我传递的信息是：{this.state.showChildText}
      <br/><br/>
      {/* 父组件向子组件通讯 */}
      <FormPractice show={this.state.showChild} getChild={this.getChild}/>
    </div>)
  }
}
export default InCome