import { lazy } from 'react'
const Index = lazy(() => import('@/pages/Index.jsx'))
const Home = lazy(() => import('@/pages/Home.jsx'))
const HomeLeft = lazy(() => import('@/pages/Home/Home-left.jsx'))
const HomeRight = lazy(() => import('@/pages/Home/Home-right.jsx'))

export default [
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                index: true,
                element: <HomeLeft />
            },
            {
                path: '/home/home-right',
                element: <HomeRight />,
            }]
    },
    { path: "*", element: <Index /> },
]