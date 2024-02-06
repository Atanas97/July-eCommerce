import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { Link, useParams } from "react-router-dom";
import useFetchApi from "../Hooks/useFetchApi";
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";

import Section from "../Components/Section";
import PageBanner from "../Components/PageBanner";

import ClothesBanner from "../Assets/clothes_banner.jpg";
import { LuPackageCheck, LuShip } from "react-icons/lu";
import Loader from "../Components/Loader";

const SingleProduct = () => {
    const { id } = useParams();
    const { apiData, isLoading, serverError } = useFetchApi(
        `https://fakestoreapi.com/products/${id}`
    );

    const { title: itemName, description, image, price, category, id: itemId } = apiData;

    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    return (
        <>
            <Helmet>
                {/* TODO: ADD META INFO FOR SINGLE PRODUCT */}
                <title>{itemName}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={itemName} />
                <meta property="og:description" content={description} />
            </Helmet>

            <PageBanner title={itemName} bgImage={ClothesBanner} bannerTextColor="text-black" />

            <Section>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 my-40 relative">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className="max-w-[40rem] mx-auto">
                                <picture className="block h-[60rem]">
                                    <img
                                        className="object-contain h-full"
                                        src={image}
                                        alt={itemName}
                                        loading="lazy"
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                </picture>
                            </div>
                            <div className="flex flex-col max-w-[50rem]">
                                <h1 className="text-h1">{itemName}</h1>
                                <span className="text-h1 my-10">${price}</span>
                                <p className="text-p mb-10">{description}</p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    <button
                                        onClick={() => addToCart(itemId, apiData)}
                                        type="button"
                                        className="inline-block flex-1 whitespace-nowrap px-12 py-4 bg-black rounded-lg text-white"
                                    >
                                        Add To Cart
                                    </button>
                                    <Toaster />
                                    <button
                                        onClick={() => addToWishlist(itemId, apiData)}
                                        type="button"
                                        className="inline-block flex-1 whitespace-nowrap px-12 py-4 border bg-white rounded-lg"
                                    >
                                        Add To Wishlist
                                    </button>
                                </div>

                                <div className="mt-auto">
                                    <p className="flex items-center gap-2 text-p mb-3">
                                        <LuShip size={28} />
                                        Free shipping over
                                        <span className="font-medium">$300</span>
                                    </p>
                                    <p className="flex items-center flex-wrap gap-2 text-p">
                                        <LuPackageCheck size={28} />
                                        Delivers in:
                                        <span className="font-medium">3-7</span>
                                        Working Days
                                        <Link to="/termsofuse" className="underline">
                                            Learn More
                                        </Link>
                                    </p>
                                </div>
                                <hr className="bg-[#ccc] my-10" />
                                <div>
                                    <p className="flex items-center gap-2 text-p">
                                        Category:
                                        <Link
                                            to={{
                                                pathname: `/products/category/${category}`,
                                            }}
                                            state={{ category: category }}
                                            className="underline"
                                        >
                                            {category}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Section>
        </>
    );
};

export default SingleProduct;
