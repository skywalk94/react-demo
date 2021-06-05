import React, { Component } from 'react'
class Even extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "msg",
            value: ""
        }
    }
    changeVal = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    keyUpCode = (e) => {
        if (e.keyCode === 13) {
            console.log(this.state.value)
        }
    }
    render() {
        return (
            <>
                {/* 通过事件对象获取值 */}
                <input type="text" onChange={this.changeVal} onKeyUp={this.keyUpCode} />
                {this.state.value}
            </>
        )
    }
}

export default Even