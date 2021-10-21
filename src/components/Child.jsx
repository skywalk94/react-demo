import React from 'react';
import Theme from "@/context/Theme.jsx"
export default () => {
    return (
        <Theme.Consumer>
            {data => <p>接收父组件context传递的值：{data}</p>}
        </Theme.Consumer>
    );
}