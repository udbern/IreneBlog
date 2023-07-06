import { useLocation, useNavigate,} from "react-router-dom";

import Hamburger from "./Hamburger";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true
        }

    };
    
    return (
        <div className="sticky top-0 z-50 ">
            <nav className=" dark:bg-gray-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
                <div className="font-body text-xl relative flex justify-between items-center  max-w-6xl mx-auto  dark:text-white font-semibold capitalize p-5">
                    <div className="cursor-pointer">
                        <h1 className="tracking-wide text-gray-100 " onClick={() =>navigate("/")}>Irene</h1>
                    </div>
                    <div className=" block md:hidden ">
                        <Hamburger className="md:hidden text-gray-100 text-2xl cursor-pointer " />
                    </div>
                    <div className=" hidden md:flex">
                        
                        <ul className="space-x-5 hidden md:flex tracking-wider">
                            <li
                                className={` font-body cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute("/") && "text-white !border-b-gray-100"}`} onClick={() => navigate("/")}
                            >
                                Home
                            </li>
                            
                            <li className={`cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute("/Blog") && "!text-white !border-b-gray-100"}`} onClick={() => navigate("/Blog")}>Blog</li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
