import { lazy } from 'react';
const router = [
    {
        path: "/",
        component: lazy(() => import('@/view/index/index.jsx')),
        exact: true
    }, {
        path: "/main",
        component: lazy(() => import('@/view/main/main.jsx')),
        exact: true
    }
]
export default router
