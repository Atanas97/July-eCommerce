import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";

import QuickView from "./QuickView";

import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Toaster } from "react-hot-toast";

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
            {/* [&>*]:overflow-hidden */}
            <div className="group p-8 border flex flex-col">
                <div className="relative">
                    <Link to={`/products/${category}/${title}/${id}`}>
                        <picture className="max-w-[25rem] mx-auto flex justify-center aspect-square">
                            <img
                                src={image}
                                alt={title}
                                loading="lazy"
                                className="max-h-[25rem] mx-auto object-contain"
                            />
                        </picture>
                    </Link>

                    <div className="flex flex-col gap-4 absolute right-0 top-4 md:opacity-0 transition-all ease-in-out delay-350 md:-right-10 md:group-hover:right-4 group-hover:opacity-100">
                        <button
                            className="bg-orange rounded-full flex items-center justify-center w-[5rem] h-[5rem]"
                            onClick={() => addToWishlist(id, data)}
                        >
                            <FiHeart size={24} color="white" />
                        </button>
                        <button
                            onClick={handleQuickView}
                            className="bg-orange rounded-full flex items-center justify-center w-[5rem] h-[5rem]"
                        >
                            <FiSearch size={24} color="white" />
                        </button>
                        <button
                            onClick={() => addToCart(id, data)}
                            className="bg-orange rounded-full flex items-center justify-center w-[5rem] h-[5rem]"
                        >
                            <FiShoppingCart size={24} color="white" />
                        </button>
                    </div>
                </div>

                <Toaster />
                <div className="mt-4 text-center flex flex-col h-full">
                    <small className="inline-block my-4">{category}</small>
                    <h4 className="text-h4 font-">{title}</h4>
                    <p className="font-normal text-h4 my-6">${price}</p>

                    <Link
                        className="inline-block mt-auto self-center bg-orange px-10 py-4 text-center text-white cursor-pointer"
                        to={`/products/${category}/${title}/${id}`}
                    >
                        Select option
                    </Link>
                </div>
            </div>
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
