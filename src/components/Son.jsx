import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是子组件"
        };
    }
    // 可监听父组件传值的变化
    // 将废弃
    componentWillReceiveProps() {

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
// 如果父组件没有传入title值，赋默认值
Son.defaultProps = {
    title: "标题"
}

// 通过PropTypes来验证传入的title为string类型
Son.propTypes = {
    title: PropTypes.string
};
// 文档说明
// https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
export default Son;