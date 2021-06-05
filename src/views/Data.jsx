import React, { Component } from 'react'

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
                        return <li key={index}>
                            {item.name}{item.age}
                        </li>
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Data