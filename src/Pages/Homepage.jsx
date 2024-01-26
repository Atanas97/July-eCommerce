import React from "react";
import { Helmet } from "react-helmet";
import BestSellers from "../Components/BestSellers/BestSellers";
import NewsletterPopup from "../Layout/NewsletterPopup";
import NewsletterSection from "../Components/NewsletterSection";
import SkeletonLoading from "../Components/SkeletonLoading";
import LimitedOffer from "../Components/LimitedOffer";
import Slider from "../Components/Slider";
import CartSlide from "../Components/CartSlide";

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>
                    July Fashion: Timeless Elegance for Modern Living | Shop Stylish Clothing Online
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

            <NewsletterPopup />
            <Slider />
            <BestSellers title="Best Sellers" />
            <LimitedOffer />
            {/* <CartSlide /> */}
            <NewsletterSection
                title="NEWSLETTER"
                message="Sign up and get up to 20% off your first purchase"
            />
            <SkeletonLoading />
        </>
    );
};

export default Homepage;
