import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import BrandCarCards from "../BrandCarCards/BrandCarCards";
import ProductNotFound from "../ProductNotFound/ProductNotFound";
import { useTheme } from "../../ThemeProvider/ThemeProvider";


const BrandProducts = () => {
    const {isDarkTheme} = useTheme()
    
    const brand = useLoaderData()
    const [brandProducts, setBrandProducts] = useState([])
    console.log(brand);
    useEffect(() => {
        fetch(`https://automobile-project-server-m8p4aqcrp-shohaib-hossains-projects.vercel.app/brand`)
            .then(res => res.json())
            .then(data => setBrandProducts(data))
    }, [])
    const brandCars = brandProducts.filter(brandProduct => brandProduct.brand_name === brand.brandName)
    console.log(brandCars);

    return (
        <div className={`${isDarkTheme ? "bg-[#3f3f3f] text-white" : "bg-white "}`}>
            <div className="bg-bg-image"><Navbar></Navbar></div>
            <div className="carousel w-full h-[85vh]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={brand.add_img_1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={brand.add_img_2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={brand.add_img_3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                {
                    brandCars.length > 0 && <h1 className="text-5xl font-bold text-center mt-12 mb-12">Our Products</h1>
                }
                <div >

                    {
                        brandCars.length === 0 ? <ProductNotFound></ProductNotFound> : 
                        <div className="p-2 lg:p-0 max-w-5xl grid gap-8 grid-cols-1 lg:grid-cols-2 mx-auto mt-12 pb-12 text-black">
                            {
                                brandCars.map(brandCar => <BrandCarCards key={brandCar._id} brandCar={brandCar}></BrandCarCards>)
                            }
                        </div>
                    }

                </div>
            </div>

        </div>
    );
};

export default BrandProducts;