import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
// import { logout } from "../redux/userSlice";

export default function Navbar() {
    const currentUser = useSelector(state => state["user"]);
    const dispatch = useDispatch()
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const handleLogout = () => {
        // dispatch(logout())
    }
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-900">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/"
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"

                        >
                            Niftyit
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to="/profile"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <span className="ml-2">Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Product</span>
                                </Link>
                            </li>
                            {
                                currentUser ? <li className="nav-item">
                                    <Link onClick={handleLogout} to="/signup"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                    >
                                        <span>logout</span>
                                    </Link>
                                </li> : <li className="nav-item">
                                    <Link to="/login"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                    >
                                        <span>Login</span>
                                    </Link>
                                </li>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}