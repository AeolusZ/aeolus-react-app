import React, {Component} from 'react'

class FormPractice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
       <button style={{display: this.props.show ? 'block' : 'none'}}>我是子组件</button>
    </div>)
  }
}
export default FormPractice
