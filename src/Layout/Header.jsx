import { useContext, useState } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import Section from "../Components/Section";

import Logo from "../Assets/july_logo.svg";
import { FiHeart, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
const Home = () => {
    const { wishlist } = useContext(WishlistContext);
    const { cart, setIsCartSlideOpen } = useContext(CartContext);
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
                        <div className="flex items-center lg:order-2">
                            <div className="p-4">
                                <a href="" title="searchbar">
                                    <FiSearch size={24} />
                                </a>
                            </div>
                            <div className="relative p-4">
                                <Link to="/wishlist" title="wishlist">
                                    <FiHeart size={24} />
                                    {wishlist.length > 0 && (
                                        <span className="absolute top-0 right-0 bg-orange rounded-full flex justify-center items-center w-8 h-8 text-white">
                                            {wishlist.length}
                                        </span>
                                    )}
                                </Link>
                            </div>
                            <div className="relative p-4">
                                <button
                                    onClick={() => setIsCartSlideOpen(true)}
                                    type="button"
                                    title="cart"
                                    className="flex"
                                >
                                    <FiShoppingCart size={24} />
                                    {cart.length > 0 && (
                                        <span className="absolute top-0 right-0 bg-orange rounded-full flex justify-center items-center w-8 h-8 text-white">
                                            {cart.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none"
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
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => {
                                            return (
                                                "block font-normal text-h4 py-2 pr-4 pl-3 lg:p-0 underline-animation" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/products"
                                        className={({ isActive }) => {
                                            return (
                                                "block font-normal text-h4 py-2 pr-4 pl-3 lg:p-0 underline-animation" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                        state={{ baseUrl: "/" }}
                                        onClick={toggleMenu}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/aboutus"
                                        className={({ isActive }) => {
                                            return (
                                                "block font-normal text-h4 py-2 pr-4 pl-3 lg:p-0 underline-animation" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/store-locator"
                                        className={({ isActive }) => {
                                            return (
                                                "block font-normal text-h4 py-2 pr-4 pl-3 lg:p-0 underline-animation" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                    >
                                        Store Locator
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) => {
                                            return (
                                                "block font-normal text-h4 py-2 pr-4 pl-3 lg:p-0 underline-animation" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        Team
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contactus"
                                        className={({ isActive }) => {
                                            return (
                                                "block font-normal text-h4 py-2 pr-4 pl-3 lg:p-0 underline-animation" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        Contact Us
                                    </NavLink>
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
