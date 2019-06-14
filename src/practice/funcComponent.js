import React from 'react'
function FuncComponent(props) {
    console.log(this)
    const handleClick = () => {
        console.log('hahhah')
    }
    return(<div><button onClick={handleClick}>点击我</button></div>)
}
export default FuncComponent;
