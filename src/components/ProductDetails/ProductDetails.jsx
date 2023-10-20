import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaCar, FaDollarSign, } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const ProductDetails = () => {
    const {user} = useContext(AuthContext)
    
    
    const {isDarkTheme} = useTheme()
    const product = useLoaderData()
    const [allCartCards, setAllCartCards] = useState([])
    // console.log(product);
    const { product_name, img, brand_name, short_desc, price, rating, vehicle_type, } = product;
    // const dataSend = {product_name, img, brand_name, short_desc, price, rating, vehicle_type}
    useEffect(() => {
        fetch(`https://automobile-project-server-m8p4aqcrp-shohaib-hossains-projects.vercel.app/cart`)
            .then(res => res.json())
            .then(data => setAllCartCards(data))
    }, [allCartCards])

    const handleAddToCart = () => {
        
        
        // console.log(product);
        const getCartCards = allCartCards || []
        const isExist = getCartCards.find(cartCard => cartCard._id === product._id)
        if (!isExist) {
            const cartData = {...product, email: user.email}
            fetch(`https://automobile-project-server-m8p4aqcrp-shohaib-hossains-projects.vercel.app/cart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        return (
                            Swal.fire({
                                title: 'Success!',
                                text: 'Added to Cart Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        )
                        
                    }
                })
        }
        else{
            return (
                Swal.fire({
                    title: 'Error!',
                    text: 'Duplicate Item',
                    icon: 'error',
                    confirmButtonText: 'Go back'
                })
            )
        }

    }

    return (
        <div className={`${isDarkTheme ? "bg-[#3f3f3f] text-white" : "bg-white "}`}>
            <div className="bg-bg-image"><Navbar></Navbar></div>
            <div>
                <div className="max-w-screen-xl mx-auto mt-12 pb-12 p-3">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold  mb-3">{product_name}</h1>
                            <p className="  text-2xl font-bold mb-5 rounded-md ">Brand Name: <span className="bg-yellow-400 px-2 py-1 text-white rounded-xl">{brand_name}</span></p>

                        </div>
                        <div>
                            <p className="flex items-center relative"><span className="absolute bottom-6 right-36"><FaDollarSign></FaDollarSign></span><span className="text-5xl text-yellow-400 font-semibold">{price}</span></p>
                        </div>

                    </div>
                    <div>
                        <div className="hero h-[80vh] relative" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="hero-overlay bg-opacity-60 absolute  top-[75%] h-[25%] inset-0">

                            </div>


                            <button onClick={handleAddToCart} className="btn absolute top-[85%] md:top-[80%] right-[60%] md:right-[80%] lg:right-[85%] text-white bg-yellow-400 hover:bg-orange-400 hover:scale-110 hover:bg-transparent hover:outline-yellow-400 font-bold outline-none border-none">Add to Cart</button>



                        </div>

                    </div>
                    <h1 className="text-3xl font-bold  mb-4 mt-20">Product Description</h1>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Rating style={{ maxWidth: 150 }} readOnly halfFillMode='svg' value={rating < 4.5 ? Math.floor(rating) : rating} />
                            <p className="ml-5 text-2xl">{rating}</p>
                        </div>
                        <div className="flex items-center ml-5 text-2xl">
                            <span className="text-yellow-400"><FaCar></FaCar></span>
                            <span className="uppercase ml-3">{vehicle_type}</span>
                        </div>
                    </div>


                    <p className="text-justify  mt-5">{short_desc}</p>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;