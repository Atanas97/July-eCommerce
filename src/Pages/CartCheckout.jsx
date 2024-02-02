import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import ClothesBanner from "../Assets/clothes_banner.jpg";
import Section from "../Components/Section";
import PageBanner from "../Components/PageBanner";
import CartCheckoutItem from "../Components/CartCheckoutItem";
import CartAsideBlock from "../Components/CartAsideBlock";
import CartDeliveryForm from "../Components/CartDeliveryForm";

const CartCheckout = () => {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const mappedCartItems = cart.map((item) => <CartCheckoutItem item={item} key={item.id} />);
    const onSubmit = (data) => {
        navigate("/cart-preview", { state: { formData: data } });
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
                <div className="my-40 lg:flex lg:gap-10">
                    {cart.length <= 0 ? (
                        <p className="text-p">Your cart is empty. Continue shopping</p>
                    ) : (
                        <>
                            <article className="lg:w-full">
                                <h2 className="text-h2 mb-8">Your Cart</h2>
                                {mappedCartItems}
                                <CartDeliveryForm register={register} errors={errors} />
                            </article>
                            <aside className="lg:w-2/5">
                                <CartAsideBlock handleSubmit={handleSubmit(onSubmit)} />
                            </aside>
                        </>
                    )}
                </div>
            </Section>
        </>
    );
};

export default CartCheckout;
