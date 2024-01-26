import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Helmet } from "react-helmet";

import ClothesBanner from "../Assets/clothes_banner.jpg";
import Section from "../Components/Section";
import PageBanner from "../Components/PageBanner";
import CartCheckoutItem from "../Components/CartCheckoutItem";
import CartAsideBlock from "../Components/CartAsideBlock";

const CartCheckout = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);

    const mappedCartItems = cart.map((item) => <CartCheckoutItem item={item} key={item.id} />);

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
                <div className="my-40 lg:flex lg:gap-10">
                    <article className="lg:w-full">
                        <h2 className="text-h2 mb-8">Your Cart</h2>
                        {mappedCartItems}
                    </article>
                    <aside className="lg:w-2/5">
                        <CartAsideBlock />
                    </aside>
                </div>
            </Section>
        </>
    );
};

export default CartCheckout;
