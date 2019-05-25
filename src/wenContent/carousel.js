import React from 'react'
import './style.css'
import { configConsumerProps } from 'antd/lib/config-provider';
class Carousel extends React.PureComponent{
    componentDidMount() {
        const imgs = document.querySelector('#imgContent')
        imgs.style.marginLeft = -40 + 'px'
        function next_pic () {
            var newMarginLeft;
            if(imgs.style.marginLeft === "-1540px"){
                newMarginLeft = -40;
            }else{
                newMarginLeft = parseInt(imgs.style.marginLeft) - 500;
            }
            imgs.style.marginLeft = newMarginLeft + "px";
        }
        setInterval(next_pic, 2000)
    }
    render() {
        const divStyle={
            width: '500px',
            height: '350px',
            overflow: 'hidden',
            border: '1px solid #cccccc'
        }
        return(<div style={divStyle}>
            <ul id="imgContent">
                {this.props.img.map((val, i) => {
                    return (<li key={i}>
                        <img className="imgContent_imgs" src={val.src}/>
                        {val.alt}
                    </li>)
                })}
            </ul>
            </div>)
    }
}
export default Carousel