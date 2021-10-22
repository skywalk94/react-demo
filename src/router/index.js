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
        path: "/data_detail_t",
        component: lazy(() => import('@/views/Data_detail_t.jsx')),
        exact: true
    }, {
        path: "/father",
        component: lazy(() => import('@/views/Father.jsx')),
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
    }, {
        path: "/hook",
        component: lazy(() => import('@/views/Hook.jsx')),
        exact: true
    }, {
        path: "/redux",
        component: lazy(() => import('@/views/Redux.jsx')),
        exact: true
    }, {
        path: "/portals",
        component: lazy(() => import('@/views/Portals.jsx')),
        exact: true
    }, {
        path: "/transition",
        component: lazy(() => import('@/views/Transition/Transition.jsx')),
        exact: true
    }, {
        path: "/context",
        component: lazy(() => import('@/views/Context.jsx')),
        exact: true
    }, {
        path: "/hoc",
        component: lazy(() => import('@/views/Hoc.jsx')),
        exact: true
    }
]
export default router