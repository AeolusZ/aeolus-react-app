import React from 'react'
class Parent extends React.PureComponent{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(<div>
            <button onClick={this.handleClick}>点击父组件</button>
        </div>)
    }
    handleClick = () => {
        console.log('这是父组件')
    }
}
export default Parent;