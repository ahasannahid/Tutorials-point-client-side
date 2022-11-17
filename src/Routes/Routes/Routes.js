import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Category from "../../components/Category/Category";
import COurseDetails from "../../components/CourseDetails/COurseDetails";
import Faq from "../../components/FAQ/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import Checkout from "../../pages/Shared/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element : <Home></Home>,
                loader: () => fetch('https://tutorials-point-server-site.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader : ({params}) => fetch(`https://tutorials-point-server-site.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element:<COurseDetails></COurseDetails>,
                loader: ({params}) => fetch(`https://tutorials-point-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://tutorials-point-server-site.vercel.app/courses/${params.id}`)
            }
        ]
    }
]) ;