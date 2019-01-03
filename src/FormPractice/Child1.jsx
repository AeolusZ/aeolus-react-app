import React, {Component} from 'react'
import eventProxy from './eventProxy'

class Child1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'start',
      title: 'aaa'
    }
  }
  componentDidMount() {
    eventProxy.on('msg', msg => {
      this.setState({msg})
    }, title => {
      this.setState({title})
    })
  }
  componentDidUpdate() {
    console.log('Child_1 update');
  }
  render() {
    console.log(this.state.title)
    return(<div>
      Child1 component: {this.state.msg} {this.state.title}
    </div>)
  }
}
export default Child1