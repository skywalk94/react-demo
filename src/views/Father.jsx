import React, { Component } from 'react';
import Son from "../components/Son"

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    run = () => {
        console.log("我的来自父组件的方法")
    }

    childVal = (value) => {
        // 获取子组件传递值
        this.setState({
            value: value
        })
    }

    getChild = (child) => {
        // 获取整个子组件的实例
        // 也可以通过使用ref获取
        console.log(child)
    }
    render() {
        return (
            <div>
                {/*  parent={this}可将整个父组件的值和方法传递给子组件 */}
                <Son title="明知山" func={this.run} parent={this} getChild={this.getChild}></Son>
                {this.state.value}
            </div>
        );
    }
}
export default Father;