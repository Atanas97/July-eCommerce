import Logo from "../Assets/july_logo.svg";
import { FiHeart, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../Components/Section";

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="shrink-0">
            <Section>
                <nav className="border-gray-200 py-4">
                    <div className="flex flex-wrap justify-between items-center">
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
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>
                        <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                            <ul
                                className={`${
                                    showMenu ? "block" : "hidden"
                                } lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}
                            >
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:p-0 underline-animation"
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="block py-2 pr-4 pl-3 text-gray-700 lg:p-0 underline-animation"
                                        state={{ baseUrl: "/" }}
                                        onClick={toggleMenu}
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/aboutus"
                                        className="block py-2 pr-4 pl-3 text-gray-700 lg:p-0 underline-animation"
                                        onClick={toggleMenu}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/store-locator"
                                        className="block py-2 pr-4 pl-3 text-gray-700 lg:p-0 underline-animation"
                                        onClick={toggleMenu}
                                    >
                                        Store Locator
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 pr-4 pl-3 text-gray-700 lg:p-0 underline-animation"
                                        onClick={toggleMenu}
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contactus"
                                        className="block py-2 pr-4 pl-3 text-gray-700 lg:p-0 underline-animation"
                                        onClick={toggleMenu}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Section>
        </header>
    );
};

export default Home;
