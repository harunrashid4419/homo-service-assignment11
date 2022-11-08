import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllServices from "../components/AllService/AllServices";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Details from "../components/Others/Details/Details";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router;