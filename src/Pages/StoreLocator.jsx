import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import PageBanner from "../Components/PageBanner";
import Section from "../Components/Section";

import storeLocator from "../Assets/store-locator-banner.jpg";
import location1 from "../Assets/locator/location1.jpg";
import location2 from "../Assets/locator/location2.jpg";
import location3 from "../Assets/locator/location3.jpg";
import location4 from "../Assets/locator/location4.jpg";

const StoreLocator = () => {
    return (
        <>
            <Helmet>
                <title>
                    Find Your Nearest July Clothing Boutique: Locate Exclusive
                    Fashion in Your Area
                </title>
                <meta
                    name="description"
                    content="Use our Store Locator to discover the closest July Clothing boutique near you. Immerse yourself in the world of exclusive fashion with our curated collections. Find the perfect blend of sophistication and style within reach. Experience personalized shopping at a July store—where elegance meets convenience. Explore our diverse range and elevate your wardrobe with the latest trends. Discover the joy of in-person shopping with July Clothing Ecommerce."
                />
                <meta
                    property="og:title"
                    content="Find Your Nearest July Clothing Boutique: Locate Exclusive Fashion in Your Area"
                />
                <meta
                    property="og:description"
                    content="Use our Store Locator to discover the closest July Clothing boutique near you. Immerse yourself in the world of exclusive fashion with our curated collections. Find the perfect blend of sophistication and style within reach. Experience personalized shopping at a July store—where elegance meets convenience. Explore our diverse range and elevate your wardrobe with the latest trends. Discover the joy of in-person shopping with July Clothing Ecommerce."
                />
            </Helmet>
            <PageBanner
                title="Find Your Nearest July Clothing Boutique: Locate Exclusive Fashion in Your Area"
                bgImage={storeLocator}
                bannerTextColor="text-white"
            ></PageBanner>
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 my-20">
                    <div className="flex flex-col gap-6 max-w-[54rem]">
                        <picture>
                            <img
                                src={location1}
                                alt=""
                                loading="lazy"
                                width={"540px"}
                                height={"370px"}
                            />
                        </picture>
                        <h3 className="text-h3">Lincoln Park</h3>
                        <address className="text-p">
                            211 W Armitage Ave, Chicago, IL 60614
                        </address>
                        <div>
                            <p className="text-p text-gray">
                                T. +1 773 6216 240
                            </p>
                            <p className="text-p text-gray">
                                E. hello@uxper.co
                            </p>
                            <p className="text-p text-gray">
                                Mon: Closed, Tue-Sat: 12PM-6PM, Sun: Closed
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="underline transition duration-200 hover:text-orange"
                        >
                            See Inventory
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6 max-w-[57rem]">
                        <picture>
                            <img
                                src={location2}
                                alt=""
                                loading="lazy"
                                width={"540px"}
                                height={"370px"}
                            />
                        </picture>
                        <h3 className="text-h3">Georgetown</h3>
                        <address className="text-p">
                            332 M St NW, Washington, DC 20007
                        </address>
                        <div>
                            <p className="text-p text-gray">
                                T. +1 773 6216 240
                            </p>
                            <p className="text-p text-gray">
                                E. hello@uxper.co
                            </p>
                            <p className="text-p text-gray">
                                Mon: Closed, Tue-Sat: 12PM-6PM, Sun: Closed
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="underline transition duration-200 hover:text-orange"
                        >
                            See Inventory
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6 max-w-[57rem]">
                        <picture>
                            <img
                                src={location3}
                                alt=""
                                loading="lazy"
                                width={"540px"}
                                height={"370px"}
                            />
                        </picture>
                        <h3 className="text-h3">Hayes Valley</h3>
                        <address className="text-p">
                            123 Hayes St, San Francisco, CA 94102
                        </address>
                        <div>
                            <p className="text-p text-gray">
                                T. +1 773 6216 240
                            </p>
                            <p className="text-p text-gray">
                                E. hello@uxper.co
                            </p>
                            <p className="text-p text-gray">
                                Mon: Closed, Tue-Sat: 12PM-6PM, Sun: Closed
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="underline transition duration-200 hover:text-orange"
                        >
                            See Inventory
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6 max-w-[57rem]">
                        <picture>
                            <img
                                src={location4}
                                alt=""
                                loading="lazy"
                                width={"540px"}
                                height={"370px"}
                            />
                        </picture>
                        <h3 className="text-h3">Los Angeles</h3>
                        <address className="text-p">
                            8425 Melrose Ave, Los Angeles, CA 90069
                        </address>
                        <div>
                            <p className="text-p text-gray">
                                T. +1 773 6216 240
                            </p>
                            <p className="text-p text-gray">
                                E. hello@uxper.co
                            </p>
                            <p className="text-p text-gray">
                                Mon: Closed, Tue-Sat: 12PM-6PM, Sun: Closed
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="underline transition duration-200 hover:text-orange"
                        >
                            See Inventory
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default StoreLocator;
