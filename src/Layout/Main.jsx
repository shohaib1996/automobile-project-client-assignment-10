import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();

    const isBrandProducts = location.pathname === "/brands/652ec8a5df87b2ccf624e56c";

    return (
        <div>
            <Outlet></Outlet>
            {isBrandProducts ? null : <Footer></Footer>}
        </div>
    );
};

export default Main;
