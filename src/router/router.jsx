import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AddCart from "../Pages/AddCart/AddCart";
import Login from "../Pages/Login/Login";
import AddBrand from "../components/AddBrand/AddBrand";
import BrandProducts from "../components/BrandProducts/BrandProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import Register from "../Pages/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import { ThemeProvider } from "../ThemeProvider/ThemeProvider";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch(`https://automobile-project-server-dxo4khxh9-shohaib-hossains-projects.vercel.app/brands`)
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/cart",
                element: <PrivateRoute><AddCart></AddCart></PrivateRoute>,
                loader: ()=> fetch(`https://automobile-project-server-dxo4khxh9-shohaib-hossains-projects.vercel.app/cart`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/brands",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/brands/:id",
                element: <BrandProducts></BrandProducts>,
                loader: ({params})=> fetch(`https://automobile-project-server-dxo4khxh9-shohaib-hossains-projects.vercel.app/brands/${params.id}`),
            },
            {
                path: "/product/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://automobile-project-server-dxo4khxh9-shohaib-hossains-projects.vercel.app/brand/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://automobile-project-server-dxo4khxh9-shohaib-hossains-projects.vercel.app/brand/${params.id}`)

            }
        ]
    }
])

export default router;