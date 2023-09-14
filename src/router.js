import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import TicketAll from "./components/TicketAll";
import Order from "./components/Order";
import ShopLayout from "./components/ShopLayout";
import Catalogue from "./components/Catalogue";
import Product from "./components/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
    {
        path: "product/:id",
        element: <Product/>,
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/profile",
        element: <Profile/>,
        children: [
            {
                path: "/profile/orders",
                element: <Orders/>
            },
            {
                path: "/profile/ticket/all",
                element: <TicketAll/>
            },
            {
                path: "/profile/order/:id",
                element: <Order/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);

export default router;
