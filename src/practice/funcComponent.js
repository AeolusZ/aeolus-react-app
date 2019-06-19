import React from 'react'
function FuncComponent(props) {
    console.log(props)
    function handleClick(){
        console.log('hahhah')
    }
    return(<div><button onClick={handleClick}>点击我</button></div>)
}
class FuncComponent1 extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            words: ['mark']
        }
    }
    add = () => {
        // const { words } = this.state
        // words.push('mark1')
        // this.setState({
        //     words: words
        // })
        this.setState(prevState => ({
            words: prevState.words.concat(['mark1'])
        }))
    }
    render() {
        return(<div>
            {this.state.words} <br/>
            <button onClick={this.add}>点击添加</button>
        </div>)
    }
}
export {
    FuncComponent,
    FuncComponent1
}
