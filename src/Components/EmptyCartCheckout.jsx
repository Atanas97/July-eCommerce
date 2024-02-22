import React from "react";
import { Link } from "react-router-dom";

const EmptyCartCheckout = ({ title, text, image }) => {
    return (
        <div className="mx-auto w-full max-w-5xl text-center">
            <h2 className="text-h2 font-medium">{title}</h2>
            <p className="my-8 text-p">{text}</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <Link
                    to="/products"
                    state={{ baseUrl: "/" }}
                    className="inline-block flex-1 whitespace-nowrap rounded-lg bg-black px-12 py-4 text-white"
                >
                    Continue to our Shop
                </Link>
                <Link
                    to="/"
                    className="inline-block flex-1 whitespace-nowrap rounded-lg border bg-white px-12 py-4"
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
