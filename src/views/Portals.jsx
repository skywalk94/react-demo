import React, { Component } from 'react';
import { createPortal } from 'react-dom'
const doc = window.document //或者可以指定index.html里的元素,参照官方文档
class Portals extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.elem = doc.createElement('div')
    }
    componentDidMount() {
        doc.body.appendChild(this.elem)
    }
    componentWillUnmount() {
        doc.body.removeChild(this.elem);
    }
    render() {
        return createPortal(
            <div>Portals传送门</div>, this.elem
        );
    }
}

export default Portals;