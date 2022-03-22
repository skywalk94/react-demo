import './App.less'
import React, { Suspense } from 'react'
import { useRoutes, Link } from "react-router-dom"
import router from "@/router"
function App() {
  const element = useRoutes(router)
  return (
    <div id='App'>
      <Link to="/">首页</Link> &nbsp;
      <Link to="/home">我的</Link>
      <Suspense fallback={<div>Loading...</div>}>
        {element}
      </Suspense>
    </div >
  )
}

export default App