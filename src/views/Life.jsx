import React, { Component } from 'react';
class Life extends Component {
    constructor(props) {
        console.log("第一")
        super(props);
        this.state = {
            msg: "初始值"
        };
    }
    // 将废弃，不建议使用
    // componentWillMount() {
    //     console.log("第二")
    // }
    componentDidMount() {
        console.log("第四")
    }
    changeMsg() {
        this.setState({
            msg: "更改后的值"
        })
    }
    // 是否更新msg
    shouldComponentUpdate() {
        return true
    }
    // 将废弃，不建议使用
    componentWillUpdate() { }
    componentDidUpdate() {
        console.log("msg更新完成")
    }

    componentWillUnmount() {
        console.log("组件销毁前触发")
    }
    render() {
        console.log("第三")
        return (
            <div>
                {this.state.msg}
                <button onClick={() => this.changeMsg()}>更改msg的值</button>
            </div>
        );
    }
}

export default Life;