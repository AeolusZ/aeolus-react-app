import React, {Component} from 'react'

class Subassembly extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      {`我是子组件的子组件，我爷爷传过来的消息是${JSON.stringify(this.props)}`} 
    </div>)
  }
}
export default Subassembly