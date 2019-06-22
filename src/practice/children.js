import React from 'react'
import Parent from './parent'
class Children extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            name: 'zhang'
        }
    }
    render(){
        return(<div onClick={this.handleClick1}>
            <button onClick={this.handleClick}>点击子组件</button>
            <div>{this.state.name}</div>
            <Parent/>
        </div>)
    }
    handleClick1 = () => {
        console.log('这是父组件')
    }
    handleClick = (e) => {
        console.log(e)
        // 将该函数返回值设为true，可停止事件传播，退出循环
        e.isPropagationStopped = function() {
            return true
        }
       
        // console.log(e.defaultPrevented)
        console.log(this.state.name)
        this.setState({
            name: 'wang'
        })
        console.log(this.state.name)
        this.setState({
            name: 'zheng'
        })
        console.log(this.state.name)
    }
}
class Hello extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    render() {
      return <div onClick={this.onClick.bind(this)}>点我{this.state.counter}</div>;
    }
  
    componentDidMount() {
      //手动绑定mousedown事件
      document.getElementsByTagName('div')[0].addEventListener(
        "mousedown",
        this.onClick.bind(this)
      );
  
      //延时调用onclick事件
      setTimeout(this.onClick.bind(this), 1000);
    }
    onClick(event) {
      if (event) {
        console.log(event.type);
      } else {
        console.log("timeout");
      }
      console.log("prev state:", this.state.counter);
      this.setState({
        counter: this.state.counter + 1
      });
      console.log("next state:", this.state.counter);
    }
  }

export  {
    Children,
    Hello
}