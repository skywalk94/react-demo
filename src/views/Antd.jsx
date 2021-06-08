import React, { Component } from 'react';
import { Button } from 'antd';
import Slot from "../components/Slot"
class Antd extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Slot>
                    <Button type="primary">Button</Button>
                </Slot>
            </div>

        );
    }
}

export default Antd;