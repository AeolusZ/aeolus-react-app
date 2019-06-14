import React from 'react'
class WebSockets extends React.PureComponent{
    
 WebSocketTest = () => {
    if (window.WebSocket)
    {
        // 打开一个websocket
        let ws = require('socket.io-client')('http://localhost:3000/db');
        ws.on ('login', (data) => {
            console.log(data)
        })
        ws.on ('add user', (data) => {
            console.log(data)
        })
        ws.on ('new message', (data) => {
            console.log(data)
        })
        ws.emit('new message', {a:1})
    } else {
        alert('您的浏览器不支持WebSocket')
    }
 }

Ajax = (url, type, request) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open(type, url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(request)
    xhr.readystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status===304 || xhr.status ===206) {
                req = xhr.responseText
                return req
            }
        }
    }
}
            

    render(){
        return(<div onClick={this.Ajax('http://localhost:3000/db', 'GET', '')}>这个页面用来测试前后端的websocket通信</div>)
    }
}
export default WebSockets