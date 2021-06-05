import React, { Component } from 'react'

class News extends Component {
    constructor() {
        super()
        // 定义全局数据
        this.state = {
            list: [1, 2, 3, 4, 5],
        }
    }

    render() {
        return (
            <div className="root">
                <div> {this.state.name} </div>
            </div>
        )
    }
}

export default News