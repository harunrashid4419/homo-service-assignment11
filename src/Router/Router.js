import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllServices from "../components/AllService/AllServices";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Details from "../components/Others/Details/Details";
import Update from "../components/Others/Update/Update";
import Register from "../components/Register/Register";
import Review from "../components/Review/Review";
import Main from "../Layout/Main";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://eleventh-assignment-server.vercel.app/services')
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://eleventh-assignment-server.vercel.app/allServices')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://eleventh-assignment-server.vercel.app/allServices/${params.id}`)
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
                path: '/blog/',
                element: <Blog></Blog>
            },
            {
                path: '/addService',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/review',
                element: <PrivateRouter><Review></Review></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://eleventh-assignment-server.vercel.app/review/${params.id}`)
            },
        ]
    }
])

export default router;