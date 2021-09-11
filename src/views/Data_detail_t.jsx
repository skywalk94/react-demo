import React, { Component } from 'react';
import axiosApi from "@/axios";
import { parseUrl } from "@/utils"
class Data_detail1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // decodeURIComponent 防止页面刷新对参数进行转义
        let param = decodeURIComponent(this.props.location.search)
        console.log(parseUrl(param))
        this.getApi()
    }

    getApi = () => {
        axiosApi("getClassSchedule", {}, "post").then(res => {
            // console.log(this)
        })
    }

    back = () => {
        console.log(this.props.history)
        this.props.history.goBack()
    }

    render() {
        return (
            <div>详情页
                <button onClick={this.back}>返回上一级</button>
            </div>
        );
    }
}

export default Data_detail1;