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
      showChild: false
    }
  }
  isShowChild = () => {
    this.setState({showChild: !this.state.showChild})
  }
  render() {
    return (<div>
      <button onClick={this.isShowChild}>我是父组件</button>
      （点我，我的子组件会
      <span style={{color: HINT[this.state.showChild].split('-')[1]}}>
        {HINT[this.state.showChild].split('-')[0]}
      </span>）
      <br/><br/>
      <FormPractice show={this.state.showChild}/>
    </div>)
  }
}
export default InCome