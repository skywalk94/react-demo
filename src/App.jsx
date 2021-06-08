import './App.css';
import Beau from "./views/Beau/Beau.jsx"
import Data from "./views/Data.jsx"
import Func from "./views/Func.jsx"
import Form from "./views/Form.jsx"
import Data_detail from "./views/Data_detail.jsx"
import Data_detail1 from "./views/Data_detail1.jsx"
import Comp from "./views/Comp.jsx"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div id="App">
        <Link to="/">样式图片</Link>
        <Link to="/data">--数据绑定</Link>
        <Link to="/func">--事件绑定</Link>
        <Link to="/form">--表单提交</Link>
        <Link to="/comp">--父子组件</Link>
        <br />
        <Route exact path="/" component={Beau} />
        <Route path="/data" component={Data} />
        <Route path="/func" component={Func} />
        <Route path="/form" component={Form} />
        <Route path="/data_detail/:name" component={Data_detail} />
        <Route path="/data_detail1" component={Data_detail1} />
        <Route path="/comp" component={Comp} />
      </div>
    </Router>
  )
}

export default App;