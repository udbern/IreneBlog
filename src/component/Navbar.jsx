import { useLocation, useNavigate,} from "react-router-dom";
import { HiMenu } from 'react-icons/hi';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true
        }

    };
    
    return (
        <div className="sticky top-0 z-50">
            <nav className="  dark:bg-gray-700 bg-indigo-800 shadow-2xl">
                <div className="font-Montaga text-xl relative flex justify-between items-center  max-w-6xl mx-auto  dark:text-white font-semibold capitalize p-5">
                    <div className="cursor-pointer">
                        <h1 className="tracking-wide text-gray-100 " onClick={() =>navigate("/")}>IreneBlog</h1>
                    </div>
                    <div className="flex">
                        <HiMenu className="md:hidden text-gray-100 text-2xl cursor-pointer "/>
                        <ul className="space-x-5 hidden md:flex tracking-wider">
                            <li
                                className={` cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute("/") && "text-gray-400 !border-b-gray-400"}`} onClick={() => navigate("/")}
                            >
                                Home
                            </li>
                            
                            <li className={`cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute("/Blog") && "!text-gray-400 !border-b-gray-400"}`} onClick={() => navigate("/Blog")}>Blog</li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
