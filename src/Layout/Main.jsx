import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <div><Toaster/></div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;