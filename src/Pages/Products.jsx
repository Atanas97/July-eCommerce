import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetchApi from "../Hooks/useFetchApi";
import DropdownBtn from "../Components/DropdownBtn";

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
        `https://fakestoreapi.com/products${receivedData ? productCategories : "/"}`,
    );

    const AlphabeticalAtoZ = [
        ...apiData.sort((a, b) => a.title.localeCompare(b.title)),
    ];
    const AlphabeticalZtoA = [
        ...apiData.sort((b, a) => b.title - a.title).reverse(),
    ];

    const PriceLtoH = [...apiData.sort((a, b) => a.price - b.price)];
    const PriceHtoL = [...apiData.sort((a, b) => b.price - a.price)];
    const defaultSort = [...apiData.sort((a, b) => a.id - b.id)];

    const [selectedFilter, setSelectedFilter] = useState(defaultSort);

    const filterTypes = {
        AlphabeticalAtoZ,
        AlphabeticalZtoA,
        PriceLtoH,
        PriceHtoL,
        defaultSort,
    };

    useEffect(() => {
        if (apiData) {
            setSelectedFilter(apiData);
        }
    }, [apiData]);

    const shopItems = useMemo(() => {
        return selectedFilter.map((item) => <Card data={item} key={item.id} />);
    }, [selectedFilter]);

    return (
        <>
            <Helmet>
                <title>
                    Explore Elegance: July Clothing's Exquisite Collection of
                    Stylish Products
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
            <Section className="my-20">
                <DropdownBtn
                    filterTypes={filterTypes}
                    setSelectedFilter={setSelectedFilter}
                />

                <div className="relative grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {isLoading && <Loader />}
                    {shopItems}
                </div>
            </Section>
        </>
    );
};

export default Products;
