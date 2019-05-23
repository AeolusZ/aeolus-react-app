import React from 'react'
import './wenSelf.css'

const introduction_des_right = document.getElementsByClassName('introduction_des_right')
const contents = [{
    key: '🌟姓名', value: '翟潇闻'},{
    key: '🌹年龄', value: '20'},{ 
    key: '♈️星座', value: '双子座'},{
    key: '🏷️标签', value: '歌手、演员'},{
    key: '❤️作品', value: '《暗恋橘生淮南》、《明日之子2》、《创造营2019》'}]

class WenSelf extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        for (let i = 0; i < introduction_des_right.length; i++) {
            if (document.getElementsByClassName('introduction_des_right')[i].innerHTML.length > 35) {
                introduction_des_right[i].addEventListener('mouseover', this.handleMouseOver(i))
                introduction_des_right[i].addEventListener('mouseout', this.handleMouseOut(i))
            }
        }
    }
    handleMouseOver(index) {
        return () => {
            const ele = document.createElement('span')
            ele.innerHTML = contents[index].value
            document.getElementsByClassName('virtual')[index].appendChild(ele)
        }
    }
    handleMouseOut(index) {
        return () => {
            document.getElementsByClassName('virtual')[index].innerHTML = ''
        }
    }
    render() {
        return(<section className={this.props.class}>
            <article className="head">idol资料卡</article>
            <article className="sculpture">
                <img className='sculpture_des' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558587876723&di=b0e7275da707060d04266a9d5ebbc2fa&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8642694959%2F1000'/>
            </article>
            <article className="introduction">
                {contents.map((val,i) => {
                    return(<div className='introduction_des' key={i}>
                        <div className="introduction_des_left">{val.key} :</div> 
                        <div className="introduction_des_right">{val.value}<div className="virtual"></div> </div>
                    </div>)
                })}
            </article>
        </section>)
    }
}
export default WenSelf;