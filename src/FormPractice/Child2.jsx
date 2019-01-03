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
  render() {
    return(<div>
      Child2
    </div>)
  }
}
export default Child2