import React, { Component } from 'react';
import axiosApi from "@/axios";
class Data_detail1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // 可安装 'url' 进行参数解析
        console.log(this.props.location.search)
        this.getApi()
    }

    getApi = () => {
        axiosApi("getClassSchedule", {}, "post").then(res => {
            console.log(this)
        })
    }

    render() {
        return (
            <div>详情页</div>
        );
    }
}

export default Data_detail1;