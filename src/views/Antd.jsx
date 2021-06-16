import React, { Component } from 'react';
import { Button } from 'antd';
class Antd extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Button type="primary">Button</Button>
            </div>

        );
    }
}

export default Antd;