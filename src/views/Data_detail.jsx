import React, { Component } from 'react';
class Data_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rich: "<p>富文本内容</p>"
        };
    }
    componentDidMount() {
        // 获取动态路由参数
        console.log(this.props.match.params.name)
    }
    render() {
        return (
            <div>详情页

                <div dangerouslySetInnerHTML={{
                    __html: this.state.rich
                }}></div>
            </div>
        );
    }
}

export default Data_detail;