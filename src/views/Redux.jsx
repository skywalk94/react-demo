import React, { Component } from 'react';
import store from '@/store';
class Redux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        let value = store.getState()
        this.setState(value)
        // 注册监听store，store变化后调用组件的changeStore方法更新组件的state
        store.subscribe(this.changeStore);
    }

    addCount() {
        let count = {
            type: "add", //必须要传个type字段，value可自定义
            value: this.state.countNum += 1
        }
        store.dispatch(count);
    }

    changeStore = () => {
        this.setState(store.getState())
    }

    //处理组件销毁，setState还没执行完成
    componentWillUnmount() {
        this.setState = () => false;
    }

    render() {
        return (
            <div>
                {this.state.countNum}
                <button onClick={() => this.addCount()}>数值加1</button>
            </div>
        );
    }
}

export default Redux;