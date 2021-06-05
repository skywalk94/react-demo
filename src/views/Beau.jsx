import React, { Component } from 'react'
import logo from "../assets/img/react.png"
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
            <div className="root">
                <p style={{ 'color': 'red' }}>红色文字</p>
                <p style={{ color: this.state.isFlag ? 'blue' : 'green' }}>动态改变文字颜色</p>
                第一种引入本地图片
                <img src={logo} alt="" />
                <br />
                第二种引入本地图片
                <img src={require("../assets/img/react.png").default} alt="" />
            </div>
        )
    }
}

export default Beau