import Beau from "../views/Beau/Beau.jsx"
import Data from "../views/Data.jsx"
import Func from "../views/Func.jsx"
import Form from "../views/Form.jsx"
import Data_detail from "../views/Data_detail.jsx"
import Data_detail1 from "../views/Data_detail1.jsx"
import Comp from "../views/Comp.jsx"
import Antd from "../views/Antd.jsx"

const routes = [
    {
        path: "/",
        component: Beau
    },
    {
        path: "/data",
        component: Data
    }, {
        path: "/func",
        component: Func
    }, {
        path: "/form",
        component: Form
    }, {
        path: "/data_detail",
        component: Data_detail
    }, {
        path: "/data_detail1",
        component: Data_detail1
    }, {
        path: "/comp",
        component: Comp
    }, {
        path: "/antd",
        component: Antd
    },
]

export default routes