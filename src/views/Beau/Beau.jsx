import React, { Component } from 'react'
import logo from "@/assets/img/react.png"

import "./style.less"
class Beau extends Component {
    constructor(props) {
        super(props)
        // 定义全局数据
        this.state = {
            isFlag: true
        }
    }
    render() {
        let font = {
            fontWeight: 600,
            color: 'red'
        }
        return (
            <div className="root" id="Beau">
                <p style={{ 'color': 'red' }}>红色文字</p>
                <p style={{ color: this.state.isFlag ? 'blue' : 'green' }}>动态改变文字颜色</p>
                第一种引入本地图片
                <img src={logo} alt="" />
                <br />
                第二种引入本地图片
                <img src={require("@/assets/img/react.png").default} alt="" />
                <p className="color">引入外部css样式</p>
                <p style={font}>引入内部css样式</p>
                引入svg格式图片
                <img src={require("@/assets/svg/avatar.svg").default}></img>
            </div>
        )
    }
}

export default Beau