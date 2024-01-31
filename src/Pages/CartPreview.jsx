import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { Helmet } from "react-helmet";

import PageBanner from "../Components/PageBanner";
import Section from "../Components/Section";
import CartCheckoutItem from "../Components/CartCheckoutItem";

import ClothesBanner from "../Assets/clothes_banner.jpg";

const CartPreview = () => {
    const location = useLocation();
    const deliveryInfo = location.state.formData;

    const { cart } = useContext(CartContext);
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
                <div className="my-40">
                    <h2 className="text-h2 font-medium my-8">Your Items</h2>
                    {mappedCartItems}
                    <h2 className="text-h2 font-medium my-8">Order Information</h2>
                    <div>
                        <div className="grid gap-6 md:grid-cols-4">
                            <div>
                                <small className="text-2xl text-gray-400">First name</small>
                                <p className="text-h3 font-medium">{deliveryInfo.firstName}</p>
                            </div>
                            <div>
                                <small className="text-2xl text-gray-400">Last name</small>
                                <p className="text-h3 font-medium">{deliveryInfo.lastName}</p>
                            </div>
                            <div>
                                <small className="text-2xl text-gray-400">Phone</small>
                                <p className="text-h3 font-medium">{deliveryInfo.phone}</p>
                            </div>
                            <div>
                                <small className="text-2xl text-gray-400">Email</small>
                                <p className="text-h3 font-medium">{deliveryInfo.email}</p>
                            </div>
                        </div>
                        <div className="grid mt-10 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <small className="text-2xl text-gray-400">Town / City</small>
                                <p className="text-h3 font-medium">{deliveryInfo.city}</p>
                            </div>
                            <div>
                                <small className="text-2xl text-gray-400">Street Address</small>
                                <p className="text-h3 font-medium">{deliveryInfo.streetAddress}</p>
                            </div>
                            <div>
                                <small className="text-2xl text-gray-400">ZIP Code</small>
                                <p className="text-h3 font-medium">{deliveryInfo.zipCode}</p>
                            </div>
                            <div>
                                <small className="text-2xl text-gray-400">Business Name</small>
                                <p className="text-h3 font-medium">{deliveryInfo.businessName}</p>
                            </div>
                        </div>
                        <div className="mt-10 border-b">
                            <small className="text-2xl text-gray-400">Message</small>
                            <p className="text-h3 font-medium">{deliveryInfo.message}</p>
                        </div>
                        <div className="flex justify-between mt-10">
                            <p>Edit Order</p>
                            <p>Finalise Order</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default CartPreview;
