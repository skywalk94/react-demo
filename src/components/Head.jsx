import React, { Component } from 'react';
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是子组件"
        };
    }
    componentDidMount() {
        // 通过this.props接受父组件的值和方法
        this.props.func()
        console.log(this.props.parent) //获取整个父组件实例

        // 子组件给父组件的方法传递参数
        this.props.parent.childVal("子组件给父组件传递参数")
        this.props.getChild(this)
    }
    render() {
        return (
            <div>接收父组件传递的值：{this.props.title}</div>
        );
    }
}

export default Head;