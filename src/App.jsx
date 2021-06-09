import './App.less';
import routes from "./router"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Suspense } from 'react';
function App() {
  return (
    <Router>
      <div id="App">
        <Link to="/">样式图片</Link>
        <Link to="/data">--数据绑定</Link>
        <Link to="/func">--事件绑定</Link>
        <Link to="/form">--表单提交</Link>
        <Link to="/comp">--父子组件</Link>
        <Link to="/antd">--antd组件</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              routes.map((item) => {
                return (
                  <Route exact path={item.path} key={item.path} component={item.component} />
                )
              })
            }
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;