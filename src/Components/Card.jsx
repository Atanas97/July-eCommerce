import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";

import QuickView from "./QuickView";

import { FiHeart, FiSearch } from "react-icons/fi";

const Card = ({ data }) => {
    const { addToWishlist, isAddedToWishlist } = useContext(WishlistContext);

    const { id, title, image, price, category } = data;

    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    const handleQuickView = () => {
        setIsQuickViewOpen(!isQuickViewOpen);
    };

    return (
        <>
            <div className="group [&>*]:overflow-hidden">
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
                    <div
                        className="bg-zinc-950 text-center text-white p-4 cursor-pointer 
                            transition-all ease-in-out delay-350
                            absolute left-0 right-0 bottom-[-2rem] opacity-0 invisible 
                            group-hover:bottom-0 group-hover:visible group-hover:opacity-100 group-hover:bg-orange"
                    >
                        <Link to={`/product/${id}`}>Select option</Link>
                        {/* <p>Select Option</p> */}
                    </div>

                    <div className="flex flex-col gap-4 absolute -right-10 top-4 opacity-0 transition-all ease-in-out delay-350 group-hover:right-4 group-hover:opacity-100">
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
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-h4 font-normal my-6">{title}</h4>
                    <p className="font-normal text-h4">${price}</p>
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
