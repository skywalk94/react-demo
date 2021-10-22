import React, { Component } from 'react';
// withMouse 只提供逻辑代码
// WrappendComponent为Dom参数进行渲染
function withMouse(WrappendComponent) {
    class Mouse extends Component {
        constructor(props) {
            super(props);
            this.state = {
                x: 0,
                y: 0
            }
        }
        handleMouseMove = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove)
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }
        render() {
            return <WrappendComponent {...this.state} /> //{...this.props}可传递父组件props
        }
    }
    return Mouse
}

// 视图
const Position = props => {
    return <p>x:{props.x} y:{props.y}</p>
}
//将视图做为参数传递
export default withMouse(Position)