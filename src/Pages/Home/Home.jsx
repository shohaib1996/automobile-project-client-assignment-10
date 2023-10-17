import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import BrandCard from "../../components/BrandCard/BrandCard";


const Home = () => {
    const brands = useLoaderData()
   
   
    return (
        <div className="mb-12">
            <div className="bg-bg-image bg-no-repeat bg-cover bg-center h-[80vh]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <div className="">
                <h1 className="text-5xl text-center mt-12 font-bold">Brands</h1>
                <div className=" max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
                    {
                        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)

                    }
                    
                </div>
            </div>
           

        </div>
    );
};

export default Home;