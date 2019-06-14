import React from 'react'
import './style.css'
import {Icon} from 'antd'
class Carousel extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            left: 0,
            marginLeft: 0
        }
    }
     // 下一张图片
     next_pic = () =>{
        const imgs = document.querySelector('#imgContent')
        let newleft;
        if(imgs.getBoundingClientRect().left === this.state.left - 1500){
            this.setState({marginLeft: 0})
        }else{
            newleft = imgs.getBoundingClientRect().left - this.state.left - 500;
            this.setState({marginLeft: newleft})
        }
    }
    // 上一张图片
    pre_pic = () => {
        const imgs = document.querySelector('#imgContent')
        let newleft;
        if(imgs.getBoundingClientRect().left === this.state.left){
            this.setState({marginLeft: 0})
        }else{
            newleft = imgs.getBoundingClientRect().left - this.state.left + 500;
            this.setState({marginLeft: newleft})
        }
    }
    componentDidMount() {
        const imgs = document.querySelector('#imgContent')
        this.setState({left: imgs.getBoundingClientRect().left})
        setInterval(this.next_pic, 1000)
    }
    handleClick = (num) => {
        return () => {
            const imgs = document.querySelector('#imgContent')
            this.setState({marginLeft: - (num - 1) * 500})
        }
    }
    render() {
        const offset = this.state.marginLeft
        const divStyle={
            width: '500px',
            height: '330px',
            overflow: 'hidden',
            border: '1px solid #cccccc',
            position: 'relative'
        }
        const imgStyle = {
            marginLeft: offset,
            width: '2000px',
            height: '330px',
            overflow: 'hidden',
            transition: '.2s',
        }
        return(<div style={divStyle}>
            <ul id="imgContent" style={imgStyle}>
                {this.props.img.map((val, i) => {
                    return (<li key={i}>
                        <img className="imgContent_imgs" src={val.src}/>
                        <div className="imgContent_desc">
                            {val.desc}
                        </div>
                    </li>)
                })}
            </ul>
            {[1,2,3,4].map((val, i) => {
                const left = 200 + i * 30 
                return <Icon key={i} type="border" onClick={this.handleClick(val) } 
                    style={{position: 'absolute', left: `${left}px`, top: '307px', color: 'white'}}/>
            })}
            </div>)
    }
}
export default Carousel