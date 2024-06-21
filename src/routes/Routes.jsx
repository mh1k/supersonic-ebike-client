import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardProducts from "../pages/Dashboard/DashboardProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import Profile from "../pages/Dashboard/Profile";
import PrivateRoute from "./private/PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import Service from "../pages/Service/Service";
import Contact from "../pages/Contact/Contact";
import Ebike from "../pages/Ebike/Ebike";
import EbikeDetails from "../pages/EbikeDetails/EbikeDetails";
import EditProfile from "../pages/Dashboard/EditProfile";
import EditProduct from "../pages/Dashboard/EditProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/service",
                element: <Service></Service>,

            },
            {
                path: "/ebike",
                element: <Ebike></Ebike>,
                // loader: () => fetch("https://supersonic-ebike-server.onrender.com/ebike"),

            },
            {
                path: "/ebike/:id",
                element: <EbikeDetails></EbikeDetails>,
                loader: ({ params }) =>
                    fetch(`https://supersonic-ebike-server.onrender.com/ebike/${params.id}`),

            },
            {
                path: "/contact",
                element: <Contact></Contact>,

            },

            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },

        ]

    },
    {
        path: "/dashboard",
        element: (<PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/products",
                element: <DashboardProducts></DashboardProducts>,
            },
            {
                path: "/dashboard/add-product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/profile",
                element: <Profile></Profile>
            },
            {
                path: "/dashboard/profile/edit-profile/:id",
                element: <EditProfile></EditProfile>,
                loader: ({ params }) => fetch(`https://supersonic-ebike-server.onrender.com/users/get/${params.id}`),
            },
            {
                path: "/dashboard/products/edit-product/:id",
                element: <EditProduct></EditProduct>,
                loader: ({ params }) => fetch(`https://supersonic-ebike-server.onrender.com/ebike/${params.id}`),
            },



        ]
    }
]);

export default router;