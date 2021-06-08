import './App.css';
import routes from "./router"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
        <Switch>
          {
            routes.map((item, index) => {
              return (
                <Route exact path={item.path} key={index} render={props => (
                  <item.component {...props} />
                )} />
              )
            })
          }
        </Switch>
      </div>
    </Router>
  )
}

export default App;