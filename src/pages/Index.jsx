import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import countStore from '@/store/count'
import { observer } from "mobx-react-lite"

export default observer(() => {
    let navigate = useNavigate()
    //监听mobx触发事件
    useEffect(() => {
        console.log(countStore.count)
    }, [countStore.count])

    return (
        <div>
            <Link to="/home">a标签跳转</Link>
            <button onClick={() => navigate("/home?id=1")}>编程式跳转</button>
            <p>count为：{countStore.count}</p>
            <button onClick={() => countStore.addCount()}>+1</button>
        </div>
    )
})