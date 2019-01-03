import React, {Component} from 'react'
import eventProxy from './eventProxy'

class Child1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'start',
      title: 'aaa',
      child1: ''
    }
  }
  componentDidMount() {
    eventProxy.on('msg', msg => {
      this.setState({msg})
    }, title => {
      this.setState({title})
    })
    eventProxy.on('child1', child1 => {
      this.setState({child1})
    })
  }
  componentDidUpdate() {
    console.log('Child_1 update');
  }
  render() {
    console.log(this.state.title)
    return(<div>
      Child1 component: {this.state.msg} {this.state.title} 
      <br/>
      我弟弟传过来的值是：<span style={{color: 'pink'}}>{this.state.child1}</span>
    </div>)
  }
}
export default Child1