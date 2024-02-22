import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";

import QuickView from "./QuickView";

import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Toaster } from "react-hot-toast";

import { motion } from "framer-motion";

const Card = ({ data }) => {
    const { addToWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    const { id, title, image, price, category } = data;

    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    const handleQuickView = () => {
        setIsQuickViewOpen(!isQuickViewOpen);
    };

    return (
        <>
            <motion.div
                Layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col border p-8"
            >
                <div className="relative">
                    <Link to={`/products/${id}`}>
                        <picture className="mx-auto flex aspect-square max-w-[25rem] justify-center">
                            <img
                                src={image}
                                alt={title}
                                width={"100%"}
                                height={"100%"}
                                loading="lazy"
                                className="mx-auto max-h-[25rem] object-contain"
                            />
                        </picture>
                    </Link>

                    <div className="delay-350 absolute right-0 top-4 flex flex-col gap-4 transition-all ease-in-out group-hover:opacity-100 md:-right-10 md:opacity-0 md:group-hover:right-4">
                        <button
                            className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-orange"
                            onClick={() => addToWishlist(id, data)}
                        >
                            <FiHeart size={24} color="white" />
                        </button>
                        <button
                            onClick={handleQuickView}
                            className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-orange"
                        >
                            <FiSearch size={24} color="white" />
                        </button>
                        <button
                            onClick={() => addToCart(id, data)}
                            className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-orange"
                        >
                            <FiShoppingCart size={24} color="white" />
                        </button>
                    </div>
                </div>

                <Toaster />
                <div className="mt-4 flex h-full flex-col text-center">
                    <small className="my-4 inline-block">{category}</small>
                    <h4 className="font- text-h4">{title}</h4>
                    <p className="my-6 text-h4 font-normal">${price}</p>

                    <Link
                        className="mt-auto inline-block cursor-pointer self-center bg-orange px-10 py-4 text-center text-white"
                        to={`/products/${id}`}
                    >
                        Select option
                    </Link>
                </div>
            </motion.div>
            {isQuickViewOpen && (
                <QuickView
                    onClick={handleQuickView}
                    isOpened={isQuickViewOpen}
                    onClose={() => setIsQuickViewOpen(false)}
                    id={id}
                />
            )}
        </>
    );
};

export default Card;
