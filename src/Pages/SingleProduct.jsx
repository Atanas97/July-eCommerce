import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

//Context
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

//Utils
import useFetchApi from "../Hooks/useFetchApi";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

//Component imports
import Section from "../Components/Section";
import PageBanner from "../Components/PageBanner";
import Loader from "../Components/Loader";

//Icon imports
import ClothesBanner from "../Assets/clothes_banner.jpg";
import { LuPackageCheck, LuShip } from "react-icons/lu";

const SingleProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const { apiData, isLoading, serverError } = useFetchApi(
        `https://fakestoreapi.com/products/${id}`,
    );

    const {
        title: itemName,
        description,
        image,
        price,
        category,
        id: itemId,
    } = apiData;

    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    return (
        <>
            <Helmet>
                <title>{itemName}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={itemName} />
                <meta property="og:description" content={description} />
            </Helmet>

            <PageBanner
                title={itemName}
                bgImage={ClothesBanner}
                bannerTextColor="text-black"
            />

            <Section>
                <Helmet>
                    <meta itemprop="priceCurrency" content="USD" />
                    <meta itemprop="price" content={`${price}`} />
                    <link
                        itemprop="availability"
                        href="http://schema.org/InStock"
                    />
                    <meta itemprop="priceValidUntil" content="2024-03-24" />
                    <meta itemprop="url" content={`${location.pathname}`} />
                    <meta itemprop="name" content="July eCommerce" />
                </Helmet>
                <div className="relative my-40 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className="mx-auto max-w-[40rem]">
                                <picture className="block h-[60rem]">
                                    <img
                                        className="h-full object-contain"
                                        src={image}
                                        alt={itemName}
                                        loading="lazy"
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                </picture>
                            </div>
                            <div className="flex max-w-[50rem] flex-col">
                                <h1 className="text-h1">{itemName}</h1>
                                <span className="my-10 text-h1">${price}</span>
                                <p className="mb-10 text-p">{description}</p>

                                <div className="mb-10 flex flex-wrap gap-4">
                                    <button
                                        onClick={() =>
                                            addToCart(itemId, apiData)
                                        }
                                        type="button"
                                        className="inline-block flex-1 whitespace-nowrap rounded-lg bg-black px-12 py-4 text-white"
                                    >
                                        Add To Cart
                                    </button>
                                    <Toaster />
                                    <button
                                        onClick={() =>
                                            addToWishlist(itemId, apiData)
                                        }
                                        type="button"
                                        className="inline-block flex-1 whitespace-nowrap rounded-lg border bg-white px-12 py-4"
                                    >
                                        Add To Wishlist
                                    </button>
                                </div>

                                <div className="mt-auto">
                                    <p className="mb-3 flex items-center gap-2 text-p">
                                        <LuShip size={28} />
                                        Free shipping over
                                        <span className="font-medium">
                                            $300
                                        </span>
                                    </p>
                                    <p className="flex flex-wrap items-center gap-2 text-p">
                                        <LuPackageCheck size={28} />
                                        Delivers in:
                                        <span className="font-medium">3-7</span>
                                        Working Days
                                        <Link
                                            to="/termsofuse"
                                            className="underline"
                                        >
                                            Learn More
                                        </Link>
                                    </p>
                                </div>
                                <hr className="my-10 bg-[#ccc]" />
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
