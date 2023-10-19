import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400 font-bold" : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400 font-bold" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-yellow-400 font-bold" : ""
                }
            >
                Add Product
            </NavLink>
        </li>


    </>
    return (
        <div className="">
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="h-14 w-36" src="/images/auto_care_logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-5 menu-horizontal px-1 text-white">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <button className="btn hover:bg-yellow-400 hover:border-none bg-transparent border-2 border-yellow-400 text-white">Login</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;