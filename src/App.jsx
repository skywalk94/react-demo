import './App.less'
import React from 'react'
import { useRoutes } from "react-router-dom"
import router from "@/router"
function App() {
  const element = useRoutes(router)
  return (
    <div id='App'>
      {element}
    </div >
  )
}

export default App