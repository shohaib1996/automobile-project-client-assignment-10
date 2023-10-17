import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <div className="bg-bg-image bg-no-repeat bg-cover bg-center h-[80vh]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
           

        </div>
    );
};

export default Home;