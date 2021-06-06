import React, { Component } from 'react';
class Data_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // 获取动态路由参数
        console.log(this.props.match.params.name)
    }
    render() {
        return (
            <div>
                详情页
            </div>
        );
    }
}

export default Data_detail;