import React from "react";
import { Link } from "react-router-dom";

const BestSellersItem = ({ data }) => {
    const { id, title, image, price } = data;

    return (
        <Link to={`/product/${id}`}>
            <div className="mb-[3rem] bg-[#F7F7F7] group">
                <div className="relative">
                    <img
                        className="aspect-square object-contain"
                        src={image}
                        alt={title}
                        loading="lazy"
                        width={270}
                        height={350}
                    />
                    <div
                        className="bg-zinc-950 text-center text-white p-4 cursor-pointer 
                    transition-all ease-in-out delay-350
                    absolute left-0 right-0 bottom-[-2rem] opacity-0 invisible 
                    group-hover:bottom-0 group-hover:visible group-hover:opacity-100 group-hover:bg-orange"
                    >
                        <Link to={`/product/${id}`}>Select option</Link>
                    </div>
                </div>
                <div className="mt-[2rem]">
                    <h4 className="text-h4 my-6">{title}</h4>
                    <p className="font-semibold text-h4">${price}</p>
                </div>
            </div>
        </Link>
    );
};

export default BestSellersItem;
