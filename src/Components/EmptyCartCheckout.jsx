import React from "react";
import { Link } from "react-router-dom";

const EmptyCartCheckout = ({ title, text, image }) => {
    return (
        <div className="text-center w-full max-w-5xl mx-auto">
            <h2 className="text-h2 font-medium">{title}</h2>
            <p className="text-p my-8">{text}</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
                <Link
                    to="/products"
                    state={{ baseUrl: "/" }}
                    className="inline-block flex-1 whitespace-nowrap px-12 py-4 bg-black rounded-lg text-white"
                >
                    Continue to our Shop
                </Link>
                <Link
                    to="/"
                    className="inline-block flex-1 whitespace-nowrap px-12 py-4 border bg-white rounded-lg"
                >
                    Visit our Homepage
                </Link>
            </div>
            <img
                src={image}
                alt="July eCommerce empty checkout page"
                loading="lazy"
                width={"auto"}
                height={"auto"}
                className="mt-12"
            />
        </div>
    );
};

export default EmptyCartCheckout;
