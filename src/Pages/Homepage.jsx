import React from "react";
import { Helmet } from "react-helmet";
import Section from "../Components/Section";
import BestSellers from "../Components/BestSellers/BestSellers";
import NewsletterPopup from "../Layout/NewsletterPopup";
import QuickView from "../Components/QuickView";
import NewsletterSection from "../Components/NewsletterSection";

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>
                    July Fashion: Timeless Elegance for Modern Living | Shop
                    Stylish Clothing Online
                </title>
                <meta
                    name="description"
                    content="Discover timeless elegance with July, your go-to destination for fashion that transcends seasons. Explore a curated collection of stylish clothing that effortlessly blends sophistication and comfort. From chic essentials to statement pieces, July is your passport to a wardrobe that speaks volumes. Elevate your style with our latest arrivals and embrace the spirit of modern fashion. Shop July for a touch of luxury in every thread."
                />
                <meta
                    property="og:title"
                    content="July Fashion: Timeless Elegance for Modern Living | Shop Stylish Clothing Online"
                />
                <meta
                    property="og:description"
                    content="Discover timeless elegance with July, your go-to destination for fashion that transcends seasons. Explore a curated collection of stylish clothing that effortlessly blends sophistication and comfort. From chic essentials to statement pieces, July is your passport to a wardrobe that speaks volumes. Elevate your style with our latest arrivals and embrace the spirit of modern fashion. Shop July for a touch of luxury in every thread."
                />
            </Helmet>

            <BestSellers title="Best Sellers" />
            <NewsletterSection
                title="NEWSLETTER"
                message="Sign up and get up to 20% off your first purchase"
            />
            {/* <NewsletterPopup /> */}
            {/* <QuickView id="2" /> */}
        </>
    );
};

export default Homepage;
