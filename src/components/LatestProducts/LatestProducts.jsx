import { useEffect, useState } from "react";


const LatestProducts = () => {
    const [gallery, setGallery] = useState([]);


    useEffect(() => {
        fetch('https://automobile-project-server-dxo4khxh9-shohaib-hossains-projects.vercel.app/brand')
            .then(res => res.json())
            .then(data => {
                setGallery(data);
            });
    }, []);
    // console.log(gallery)
    const latestProducts = gallery.slice(5, 10);
    // console.log(latestProducts)
    const images = latestProducts.map(product => product.img);
    const productName = latestProducts.map(product => product.product_name)
    const productPrice = latestProducts.map(product => product.price)
    // console.log(images);
    return (
        <div className="max-w-screen-xl mx-auto mt-12">
            <div className="flex flex-col lg:flex-row justify-center gap-8 p-2 lg:p-0">
                <div className="w-full lg:w-3/5">
                    <div className="relative hover:scale-105 transition-transform duration-500 ease-in-out">
                        <img className="h-[250px] w-full" src={images[0]} alt="" />
                        <p className="absolute bottom-4 left-4 text-3xl text-yellow-400 font-bold"> {productName[0]}</p>
                        <p className="absolute bottom-14 left-4 text-5xl text-white font-bold"><span className="text-xl absolute bottom-4">$</span><span className="ml-3">{productPrice[0]}</span></p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-8">
                        <div className="flex items-center justify-center relative hover:scale-105 transition-transform duration-500 ease-in-out">
                            <img src={images[4]} alt="" />
                            <p className="absolute bottom-6 left-40 text-2xl text-yellow-400 font-bold"> {productName[1]}</p>
                            <p className="absolute bottom-14 left-52 text-4xl text-white font-bold"><span className="text-xl absolute bottom-4">$</span><span className="ml-3">{productPrice[1]}</span></p>

                        </div>
                        <div className="relative hover:scale-105 transition-transform duration-500 ease-in-out">
                            <img src={images[3]} alt="" />
                            <p className="absolute bottom-8 left-5 text-2xl text-yellow-400 font-bold"> {productName[1]}</p>
                            <p className="absolute bottom-16 left-4 text-4xl text-white font-bold"><span className="text-xl absolute bottom-4">$</span><span className="ml-3">{productPrice[1]}</span></p>


                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-2/5 relative hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img className="h-[478px]" src={images[1]} alt="" />
                    <p className="absolute bottom-10 left-5 text-3xl text-yellow-400 font-bold"> {productName[1]}</p>
                    <p className="absolute bottom-20 left-4 text-5xl text-white font-bold"><span className="text-xl absolute bottom-4">$</span><span className="ml-3">{productPrice[1]}</span></p>

                </div>
            </div>

        </div>
    );
};

export default LatestProducts;