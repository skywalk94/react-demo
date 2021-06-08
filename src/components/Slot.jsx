import React, { Component } from 'react';

class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default Slot;