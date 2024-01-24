import Logo from "../Assets/july_logo.svg";
import { FiHeart, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const [showMenu, setMenu] = useState(true);
    const location = useLocation();

    const toggleMenu = () => {
        setMenu(!showMenu);
    };

    return (
        <header className="shrink-0">
            <nav className="border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/">
                        <img src={Logo} className="mr-3" alt="" />
                    </Link>
                    <div className="flex items-center gap-4 lg:order-2 lg:gap-8">
                        <div>
                            <a href="" title="searchbar">
                                <FiSearch size={24} />
                            </a>
                        </div>
                        <div>
                            <a href="" title="wishlist">
                                <FiHeart size={24} />
                            </a>
                        </div>
                        <div>
                            <a href="" title="cart">
                                <FiShoppingCart size={24} />
                            </a>
                        </div>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    <div className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul
                            className={`${
                                showMenu ? "block" : "hidden"
                            } flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:text-primary-700 lg:p-0 dark:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aboutus"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  lg:p-0 dark:text-gray-400 "
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    state={{ baseUrl: "/" }}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  lg:p-0 dark:text-gray-400 "
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  lg:p-0 dark:text-gray-400 "
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  lg:p-0 dark:text-gray-400 "
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contactus"
                                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50  lg:p-0 dark:text-gray-400 "
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Home;
