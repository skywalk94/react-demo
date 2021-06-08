import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Data extends Component {
    constructor() {
        super()
        // 定义全局数据
        this.state = {
            list: [{
                name: "张三",
                age: "18"
            }, {
                name: "李四",
                age: "19"
            }, {
                name: "王五",
                age: "20"
            }],
            title: "标题",
            user: {
                name: "明知山"
            },
            isFlag: true
        }
    }

    render() {
        return (
            <div className="root">
                <p>{this.state.user.name} </p>
                <div title={this.state.title}>{this.state.title}</div>
                遍历数组
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                动态路由参数传值
                                <Link to={`/data_detail/${item.name}`}>{index + 1}、{item.name}{item.age}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                get参数传值
                                <Link to={`/data_detail1?name=${item.name}`}>{index + 1}、{item.name}{item.age}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
                {this.state.isFlag &&
                    <p>js控制显示的内容</p>
                }
                <p className="color">引入外部css样式</p>
            </div>
        )
    }
}

export default Data