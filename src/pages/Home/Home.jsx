import React from 'react'
import { Outlet, Link, useNavigate, useLocation, useSearchParams } from "react-router-dom"
export default () => {
    let navigate = useNavigate()
    let location = useLocation()
    let [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("aoe"))
    // console.log(location.search)
    return (
        <div>
            <button onClick={() => navigate(-1)}>后退</button>
            <br />
            <Link to="/home">左</Link> &nbsp;
            <Link to="/home/home-right">右</Link>
            <Outlet />
        </div>
    )
}