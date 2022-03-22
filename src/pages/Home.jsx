import React from 'react'
import { Outlet, Link } from "react-router-dom"
export default () => {
    return (
        <div>
            <Link to="/home">左</Link> &nbsp;
            <Link to="/home/home-right">右</Link>
            <Outlet />
        </div>
    )
}