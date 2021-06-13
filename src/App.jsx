import './App.less';
import router from "./router"
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
        <Link to="/life">--生命周期</Link>
        <Link to="/user">--嵌套路由</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              router.map((item) => {
                return (
                  <Route exact={item.exact} path={item.path} key={item.path}
                    render={props => (
                      <item.component {...props} routes={item.children} />
                    )} />
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