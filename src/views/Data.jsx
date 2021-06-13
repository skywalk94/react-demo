import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Data extends Component {
    constructor(props) {
        super(props)
        // 定义全局数据
        this.state = {
            list: [{
                name: "张三",
                age: "18",
                child: ["渲染多维数组"]
            }, {
                name: "李四",
                age: "19",
                child: ["渲染多维数组"]
            }, {
                name: "王五",
                age: "20",
                child: ["渲染多维数组"]
            }],
            title: "标题",
            user: {
                name: "明知山"
            },
            isFlag: true
        }
    }
    goPath = () => {
        console.log(this.props.history)
        this.props.history.push({
            pathname: "/data_detail1", search: `?name=张三`
        })

        // 用search,地址栏会拼接参数
        // 用state，地址栏不会拼接参数，进行了加密

        // 不留栈跳转
        // this.props.history.replace({
        //     pathname: "/data_detail1", state: `?name=张三`
        // })
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
                                <Link to={`/ data_detail / ${item.name}`}>{index + 1}、{item.name}{item.age}</Link>
                                <ul>
                                    {item.child.map((row, idx) => {
                                        return <li style={{ 'color': 'red' }} key={idx}>{row}</li>
                                    })
                                    }
                                </ul>
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
                                <Link to={`/ data_detail1 ? name = ${item.name}`}>{index + 1}、{item.name}{item.age}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
                {
                    this.state.isFlag &&
                    <p>js控制显示的内容</p>
                }
                <button onClick={this.goPath}>Js跳转路由</button>
            </div >
        )
    }
}

export default Data