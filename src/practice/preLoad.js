// 图片预加载
import React from 'react'
import { Button } from 'antd';
import './practice.css'

const imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558587876723&di=b0e7275da707060d04266a9d5ebbc2fa&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8642694959%2F1000'

class PreLoad extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            src: ''
        }
    }
    componentDidMount() {
        // 利用js预加载图片
        const img = new Image()
        img.src = imgSrc
    }
    handleClick = () => {
        this.setState({
            src: imgSrc
        })
    }
    render() {
        return(<div>
            <img src={this.state.src}/>
            <Button onClick={this.handleClick}>点击按钮，展示图片</Button>
            {/* 利用css预加载图片 */}
            {/* <div id ='preload'></div> */}
        </div>)
    }
}
export default PreLoad;