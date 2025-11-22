import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import AuthLayout from "../AuthLayout/AuthLayout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/coverage',
                element: <Coverage />,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/login',

                    },
                    {
                        path: '/register',
                        
                    }
                ]
            },
        ]
    }
])