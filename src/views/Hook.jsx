import React, { useState, useEffect } from 'react';
export default () => {
    const [count, setCount] = useState(0); // 0为count初始值
    const [arr, setArr] = useState([])
    let list = [1, 2, 3]
    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        console.log("组件加载或数据更新就会执行")
        // console.log(this) undefined 在hook中没有this指向
        setArr(['a', 'b', 'c'])
        let timer = setInterval(() => {
            // console.log("1")
        }, 1000)
        // 离开页面清除定时器
        return () => {
            clearInterval(timer)
        }
    }, []) //[]表示只会执行一次，数据更新不会触发

    const addCount = () => {
        // setCount(count + 1)
        // or
        setCount(count => {
            let num = count + 1
            console.log(num) //可以在这里处理获取新的值操作
            return num
        })
        console.log(count)
    }


    return (
        <div>
            <p>现阶段全面拥抱React</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>加一</button>
            <button onClick={addCount}>函数加一</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <ul>
                {
                    arr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}