import Index from '@/pages/Index.jsx'
import Home from '@/pages/Home/Home.jsx'
import HomeLeft from '@/pages/Home/Home-left.jsx'
import HomeRight from '@/pages/Home/Home-right.jsx'

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