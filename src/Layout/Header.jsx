import { useContext, useState } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import Section from "../Components/Section";

import Logo from "../Assets/july_logo.svg";
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

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
                    <div className="flex flex-wrap items-center justify-between">
                        <Link to="/">
                            <img src={Logo} className="mr-3" alt="" />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <div className="relative p-4">
                                <Link to="/wishlist" title="wishlist">
                                    <FiHeart size={24} />
                                    {wishlist.length > 0 && (
                                        <span className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange text-white">
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
                                        <span className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange text-white">
                                            {cart.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none lg:hidden"
                            >
                                <span className="sr-only">Open main menu</span>
                                {showMenu ? (
                                    <FiX size={24} />
                                ) : (
                                    <FiMenu size={24} />
                                )}
                            </button>
                        </div>
                        <div className="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
                            <ul
                                className={`${
                                    showMenu ? "block" : "hidden"
                                } mt-4 flex-col font-medium lg:mt-0 lg:flex lg:flex-row lg:space-x-8`}
                            >
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => {
                                            return (
                                                "underline-animation block py-2 pl-3 pr-4 text-h4 font-normal lg:p-0" +
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
                                                "underline-animation block py-2 pl-3 pr-4 text-h4 font-normal lg:p-0" +
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
                                                "underline-animation block py-2 pl-3 pr-4 text-h4 font-normal lg:p-0" +
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
                                                "underline-animation block py-2 pl-3 pr-4 text-h4 font-normal lg:p-0" +
                                                (isActive ? " text-orange" : "")
                                            );
                                        }}
                                    >
                                        Store Locator
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contactus"
                                        className={({ isActive }) => {
                                            return (
                                                "underline-animation block py-2 pl-3 pr-4 text-h4 font-normal lg:p-0" +
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
