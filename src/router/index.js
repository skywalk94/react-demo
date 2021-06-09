import React, { lazy } from 'react';
// 基于路由进行代码分割     
// 经测试可进行路由懒加载
// https://zh-hans.reactjs.org/docs/code-splitting.html#route-based-code-splitting

const routes = [
    {
        path: "/",
        component: lazy(() => import('@/views/Beau/Beau.jsx'))
    }, {
        path: "/data",
        component: lazy(() => import('@/views/Data.jsx'))
    }, {
        path: "/func",
        component: lazy(() => import('@/views/Func.jsx'))
    }, {
        path: "/form",
        component: lazy(() => import('@/views/Form.jsx'))
    }, {
        path: "/data_detail/:name",
        component: lazy(() => import('@/views/Data_detail.jsx'))
    }, {
        path: "/data_detail1",
        component: lazy(() => import('@/views/Data_detail1.jsx'))
    }, {
        path: "/comp",
        component: lazy(() => import('@/views/Comp.jsx'))
    }, {
        path: "/antd",
        component: lazy(() => import('@/views/Antd.jsx'))
    },
]
export default routes