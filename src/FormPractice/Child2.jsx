import React, {Component} from 'react'
import eventProxy from './eventProxy'

class Child2 extends Component {

  componentDidMount() {
    setTimeout(() => {
      eventProxy.trigger('msg', 'end', 'bbb')
    }, 1000)
  }
  componentDidUpdate() {
    console.log('Child_2 update');
  }
  toBrother = () => {
    eventProxy.trigger('child1', '我是你弟弟')
  }
  render() {
    return(<div>
      <button onClick={this.toBrother}>Child2</button>（点我，我要向我哥哥传值）
    </div>)
  }
}
export default Child2