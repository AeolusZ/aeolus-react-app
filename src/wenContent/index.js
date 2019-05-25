import React from 'react'
import Carousel from './carousel'
 class WenContent extends React.PureComponent{
     render() {
        const wenImgs = [{
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558523445346&di=d955b231da3600012152f5e9bc86c810&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8853580026%2F1000',
            alt: '可爱'}, {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558523547746&di=84f69e13e0265dde480c5d14a5c76e4d&imgtype=0&src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp177409409.jpg',
            alt: '绝美CP'}, {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558523663684&di=1a3eaeb3c75dce891702840d85a373d9&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F05%2F11%2Feed7939ba7d54f239c89ee1cedf835c9.jpeg',
            alt: '地表最强'}, {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558523738551&di=8a0200b12cf2effe9d47d7db189b45ea&imgtype=0&src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2Ff703738da97739129ff5349677414f1c347ae2d7.jpeg%3Ftoken%3Dabfb6deaa9bd3b378190e1f7c5b3f277%26s%3DFB9459854C532FC0782CEC8D03007081',
            alt: '人间小苦瓜'
        }]
         return(<div className={this.props.class}>
         {/* 轮播图 */}
         <Carousel img={wenImgs}/>
         </div>)
     }
 }
 export default WenContent