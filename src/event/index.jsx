import React from 'react'
import ReactDOM from 'react-dom'
class Event extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
        console.log(this)
    }
    componentDidMount() {
        const parentDom = ReactDOM.findDOMNode(this);
        const childrenDom = parentDom.querySelector("button");
        childrenDom .addEventListener('click', this.onDomClick, false);
    }
    onDomClick() {  // 事件委托
        console.log('Javascript Dom click');
    }
    handleClick = (e) => {
        console.log(e)
        e.preventDefault()
        console.log('The link was clicked.');
    }
    handleButton = () => { //react合成事件
        console.log('React click');
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    render() {
        return(<div>
            <a href="#" onClick={this.handleClick}>Click me</a>
            <button onClick={this.handleButton}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>)
    }

}
export default Event;
