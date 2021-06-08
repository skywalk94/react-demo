import React, { Component } from 'react'
import logo from "../../assets/img/react.png"

import "./style.scss"
class Beau extends Component {
    constructor(props) {
        super(props)
        // 定义全局数据
        this.state = {
            isFlag: true
        }
    }

    render() {
        return (
            <div className="root" id="Beau">
                <p style={{ 'color': 'red' }}>红色文字</p>
                <p style={{ color: this.state.isFlag ? 'blue' : 'green' }}>动态改变文字颜色</p>
                第一种引入本地图片
                <img src={logo} alt="" />
                <br />
                第二种引入本地图片
                <img src={require("../../assets/img/react.png").default} alt="" />
                <p className="color">引入外部css样式</p>
            </div>
        )
    }
}

export default Beau