import React, {Component} from 'react'
import Subassembly from './Subassembly'

class FormPractice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
    <div style={{display: this.props.show ? 'block' : 'none'}}>
      {/* 子组件通过参数向父组件通讯 */}
      <button onClick={this.props.getChild('哈哈哈，开心！')}>我是子组件</button>
    （点我，我会向父组件传递信息）
    </div>
    <br/><br/>
    {/* 父组件向子组件的子组件通讯 */}
    <Subassembly {...this.props}/>
    </div>)
  }
}
export default FormPractice
