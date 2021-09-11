import React, { useContext } from 'react';
import CountContext from '@/context/CountContext';
const Context = () => {
    const count = useContext(CountContext)
    return (
        <div>这是通过useContext获取到的组件之间共享状态<br />{count}</div>
    );
}

export default Context;