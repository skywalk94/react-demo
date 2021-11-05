import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import style from "./style.module.less"
const Transition = () => {
    const [show, setShow] = useState(true)
    return (
        <div className={style.transition}>
            <button onClick={() => setShow(!show)}>
                当前状态：{show ? '显示' : '隐藏'}</button>
            <CSSTransition
                in={show}
                classNames={style.fade}
                timeout={300}
                unmountOnExit={true}
                appear
                onEnter={el => console.log('开始进入', el)}
                onEntering={el => console.log('正在进入')}
                onEntered={el => console.log('进入完成')}
                onExit={el => console.log('开始退出')}
                onExiting={el => console.log('正在退出')}
                onExited={el => console.log('退出完成')}
            >
                <div>hello</div>
            </CSSTransition>
        </div>
    );
}

export default Transition;
