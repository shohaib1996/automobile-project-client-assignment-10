import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const ProductDetails = () => {
    const product = useLoaderData()
    // console.log(product);
    const { product_name, img, brand_name, short_desc, price, rating, vehicle_type, } = product;
    return (
        <div>
            <div className="bg-bg-image"><Navbar></Navbar></div>

        </div>
    );
};

export default ProductDetails;