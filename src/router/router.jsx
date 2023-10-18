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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/brands`)
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/cart",
                element: <AddCart></AddCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/brands",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/brands/:id",
                element: <BrandProducts></BrandProducts>,
                loader: ({params})=> fetch(`http://localhost:5000/brands/${params.id}`),
            },
            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`)
            }
        ]
    }
])

export default router;