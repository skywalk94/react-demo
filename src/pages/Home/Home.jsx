import React from 'react'
import { Outlet, Link, useNavigate, useSearchParams } from "react-router-dom"
export default () => {
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    console.log(searchParams.get("id")) // 1
    return (
        <div>
            <button onClick={() => navigate(-1)}>后退</button>
            <Link to="/home">左</Link> &nbsp;
            <Link to="/home/home-right">右</Link>
            <Outlet />
        </div>
    )
}