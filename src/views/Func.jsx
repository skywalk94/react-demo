import React, { Component } from 'react'
class Func extends Component {
    constructor(props) {
        super(props)
        // 定义全局数据
        this.state = {
            msg: "我是Msg"
        }

        // 第二种
        this.getData2 = this.getData2.bind(this)
    }
    getData1() {
        alert(this.state.msg)
    }

    getData2() {
        alert(this.state.msg)
    }

    getData3 = () => {
        alert(this.state.msg)
    }

    setData1 = () => {
        // this.setState({
        //     msg: "改变后的值"
        // })
        this.setState({
            msg: "改变后的值"
        }, () => {
            //改变完之后再执行的
            alert(this.state.msg)
        })
    }

    setData2 = (str) => {
        this.setState({
            msg: str
        })
    }

    render() {
        return (
            <div className="root">
                {this.state.msg}
                <button onClick={this.getData1.bind(this)}>第一种获取动态值</button>
                <br />
                <button onClick={this.getData2}>第二种获取动态值</button>
                <br />
                <button onClick={this.getData3}>第三种获取动态值</button>
                <br />
                <button onClick={this.setData1}>改变data里的值</button>
                <br />
                <button onClick={this.setData2.bind(this, "参数传值")}>传递参数改变data里的值</button>
            </div>
        )
    }
}

export default Func