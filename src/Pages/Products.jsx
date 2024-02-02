import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetchApi from "../Hooks/useFetchApi";

import ClothesBanner from "../Assets/clothes_banner.jpg";
import PageBanner from "../Components/PageBanner";
import Section from "../Components/Section";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const Products = () => {
    const [productCategories, setProductCategories] = useState("");
    const location = useLocation();
    let receivedData = location.state;

    useEffect(() => {
        if (receivedData.baseUrl) {
            setProductCategories(receivedData.baseUrl);
        } else {
            setProductCategories(`/category/${receivedData.category}`);
        }
    }, [productCategories]);

    const { apiData, isLoading, isError } = useFetchApi(
        `https://fakestoreapi.com/products${receivedData ? productCategories : "/"}`
    );

    const shopItems = apiData.map((item) => <Card data={item} key={item.id} />);

    // const [fullShopItems, setFullShopItems] = useState(apiData);

    const [filteredByPrice, setFilteredByPrice] = useState([]);

    const handleFilterByPrice = (minPrice, maxPrice) => {
        //Create a new array filled with all the prices
        const priceArr = Array.from(apiData.map((item) => item.price));

        //Filter prices based on input
        const filtered = priceArr.filter((element) => element >= minPrice && element <= maxPrice);

        const filteredKeywords = priceArr.filter((item) => filtered.includes(item));
        console.log(filteredKeywords);
        setFilteredByPrice(filteredKeywords);
        // setFullShopItems(filteredByPrice);
    };

    return (
        <>
            <Helmet>
                <title>
                    Explore Elegance: July Clothing's Exquisite Collection of Stylish Products
                </title>
                <meta
                    name="description"
                    content="Dive into the world of fashion excellence with July Clothing. Our 'Products' page is your gateway to a curated collection of timeless style. From chic essentials to statement pieces, discover a range that defines sophistication. Elevate your wardrobe with the latest trends and classic pieces that speak volumes about your unique style. Shop July for a blend of comfort, quality, and unmatched elegance. Explore the diversity of our products and redefine your fashion narrative with every click."
                />
                <meta
                    property="og:title"
                    content="Explore Elegance: July Clothing's Exquisite Collection of Stylish Products"
                />
                <meta
                    property="og:description"
                    content="Dive into the world of fashion excellence with July Clothing. Our 'Products' page is your gateway to a curated collection of timeless style. From chic essentials to statement pieces, discover a range that defines sophistication. Elevate your wardrobe with the latest trends and classic pieces that speak volumes about your unique style. Shop July for a blend of comfort, quality, and unmatched elegance. Explore the diversity of our products and redefine your fashion narrative with every click."
                />
            </Helmet>

            <PageBanner
                title="Explore Elegance: July Clothing's Exquisite Collection of Stylish Products"
                bgImage={ClothesBanner}
                customClasses="text-black"
            />
            <Section>
                <div className="lg:flex lg:items-start gap-10 my-20">
                    <aside className="w-[40rem]">
                        <h3 className="text-h3 font-medium">Filters</h3>
                        <hr className="text-[#ccc] my-10" />
                        <div>
                            <h4>Categories</h4>
                            <div>
                                <ul>
                                    {/* {apiData.map((item) => (
                                        <li>{item.category}</li>
                                    ))} */}
                                </ul>
                            </div>
                            <h4>Price</h4>
                            <div>
                                <ul>
                                    <li onClick={() => handleFilterByPrice(10, 49)}>
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                            <span></span>
                                            $10 - $49
                                        </label>
                                    </li>
                                    <li onClick={() => handleFilterByPrice(50, 100)}>
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                            <span></span>
                                            $50 - $99
                                        </label>
                                    </li>
                                    <li onClick={() => handleFilterByPrice(100, 200)}>
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                            <span></span>
                                            $100 - $199
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <article className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
                        {isLoading && <Loader />}
                        {shopItems}
                    </article>
                </div>
            </Section>
        </>
    );
};

export default Products;
