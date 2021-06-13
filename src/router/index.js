import { lazy } from 'react';
// 基于路由进行代码分割     
// 经测试可进行路由懒加载
// https://zh-hans.reactjs.org/docs/code-splitting.html#route-based-code-splitting
const router = [
    {
        path: "/",
        component: lazy(() => import('@/views/Beau/Beau.jsx')),
        exact: true
    }, {
        path: "/data",
        component: lazy(() => import('@/views/Data.jsx')),
        exact: true
    }, {
        path: "/func",
        component: lazy(() => import('@/views/Func.jsx')),
        exact: true
    }, {
        path: "/form",
        component: lazy(() => import('@/views/Form.jsx')),
        exact: true
    }, {
        path: "/data_detail/:name",
        component: lazy(() => import('@/views/Data_detail.jsx')),
        exact: true
    }, {
        path: "/data_detail1",
        component: lazy(() => import('@/views/Data_detail1.jsx')),
        exact: true
    }, {
        path: "/comp",
        component: lazy(() => import('@/views/Comp.jsx')),
        exact: true
    }, {
        path: "/antd",
        component: lazy(() => import('@/views/Antd.jsx')),
        exact: true
    }, {
        path: "/life",
        component: lazy(() => import('@/views/Life.jsx')),
        exact: true
    }, {
        path: "/user",
        component: lazy(() => import('@/views/User.jsx')),
        exact: false,
        children: [
            {
                path: "/user",
                component: lazy(() => import('@/views/User/Index.jsx')),
                exact: true,
            }, {
                path: "/user/info",
                component: lazy(() => import('@/views/User/Info.jsx')),
                exact: true,
            }
        ]
    },
]
export default router