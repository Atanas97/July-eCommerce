import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
// import { WishlistContext } from "./LevelContext.js";
import { Helmet } from "react-helmet";

import Section from "../Components/Section";
import WishlistCard from "../Components/WishlistCard";
import EmptyCartCheckout from "../Components/EmptyCartCheckout";

import PageBanner from "../Components/PageBanner";
import ClothesBanner from "../Assets/clothes_banner.jpg";
import EmptyWishlistImg from "../Assets/unDraw/empty_wishlist_img.svg";

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <>
            <Helmet>
                <title>July Clothing Wishlist: Curate Your Style, Save Your Favorites</title>
                <meta
                    name="description"
                    content="Explore the July Clothing Wishlist – your personalized space to curate and save your favorite fashion picks. Elevate your style journey by saving the must-haves and creating a wishlist that reflects your unique taste. Shop with ease and discover the joy of curated fashion experiences at July Clothing. Start building your wishlist today and let your style aspirations come to life with our timeless collections."
                />
                <meta
                    property="og:title"
                    content="July Clothing Wishlist: Curate Your Style, Save Your Favorites"
                />
                <meta
                    property="og:description"
                    content="Explore the July Clothing Wishlist – your personalized space to curate and save your favorite fashion picks. Elevate your style journey by saving the must-haves and creating a wishlist that reflects your unique taste. Shop with ease and discover the joy of curated fashion experiences at July Clothing. Start building your wishlist today and let your style aspirations come to life with our timeless collections."
                />
            </Helmet>

            <PageBanner
                title="July Clothing Wishlist: Curate Your Style, Save Your Favorites"
                bgImage={ClothesBanner}
                customClasses="text-black"
            />
            <Section>
                <div className="my-40">
                    {wishlist.length <= 0 ? (
                        <EmptyCartCheckout
                            title="Your Wishlist is Empty"
                            text="Your wishlist is currently empty, but you can start curating your dream wardrobe by exploring our latest collections and adding your favorite pieces now!"
                            image={EmptyWishlistImg}
                        />
                    ) : (
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                            {wishlist.map((item) => (
                                <WishlistCard product={item} key={item.id} />
                            ))}
                        </div>
                    )}
                </div>
            </Section>
        </>
    );
};

export default Wishlist;
