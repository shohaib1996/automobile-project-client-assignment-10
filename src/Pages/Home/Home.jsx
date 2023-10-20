import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import BrandCard from "../../components/BrandCard/BrandCard";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import LatestProducts from "../../components/LatestProducts/LatestProducts";



const Home = () => {
    const { isDarkTheme } = useTheme();
    const brands = useLoaderData()


    return (

        <div className={`${isDarkTheme ? "bg-[#3f3f3f] text-white" : "bg-white "}`}>
            <div className="pb-12">
                <div className="bg-bg-image bg-no-repeat bg-cover bg-center h-[80vh]">
                    <Navbar></Navbar>
                    <Banner></Banner>
                </div>
                <div className="mt-12 mb-12">
                    <h1 className="text-5xl text-center mb-12 font-bold">Feature Products</h1>
                    <FeatureProducts></FeatureProducts>
                </div>
                <div className="">
                    <h1 className="text-5xl text-center mt-12 font-bold">Brands</h1>
                    <div className=" max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 text-black">
                        {
                            brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)

                        }

                    </div>
                </div>
                <div>
                    <h1 className="text-5xl text-center mt-12 font-bold">Latest Products</h1>
                    <LatestProducts></LatestProducts>
                </div>
            </div>
        </div>
    );
};

export default Home;