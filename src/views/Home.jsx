import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
        // 定义全局数据
        this.state = {
            name: "明知山",
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

export default Home