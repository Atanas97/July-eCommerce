import React from "react";
import { Helmet } from "react-helmet";
import Section from "../Components/Section";
import PageBanner from "../Components/PageBanner";

//import images
import AboutUs1 from "../Assets/aboutus/aboutus-1.jpg";
import AboutUs2 from "../Assets/aboutus/aboutus-2.jpg";
import Banner from "../Assets/terms_of_use.jpg";

import Design from "../Assets/aboutus/design.svg";
import Confidence from "../Assets/aboutus/confidence.svg";
import Natural from "../Assets/aboutus/natural.svg";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>
                    About July: Crafting Fashion Stories, Defining Elegance in
                    Every Thread
                </title>
                <meta
                    name="description"
                    content="Discover the essence of July, where fashion meets narrative. At July Clothing Ecommerce, we weave stories through threads, defining elegance in every garment. Explore our journey, commitment to quality, and the passion that fuels our style evolution. Learn about the creators behind the brand and our mission to inspire confidence through fashion. Join us in celebrating individuality, sophistication, and the timeless allure of July's unique clothing collections."
                />
                <meta
                    property="og:title"
                    content="About July: Crafting Fashion Stories, Defining Elegance in Every Thread"
                />
                <meta
                    property="og:description"
                    content="Discover the essence of July, where fashion meets narrative. At July Clothing Ecommerce, we weave stories through threads, defining elegance in every garment. Explore our journey, commitment to quality, and the passion that fuels our style evolution. Learn about the creators behind the brand and our mission to inspire confidence through fashion. Join us in celebrating individuality, sophistication, and the timeless allure of July's unique clothing collections."
                />
            </Helmet>

            <PageBanner
                title="Believe in Craftsmanship and Luxurious Design"
                bgImage={Banner}
            />

            <Section className="my-30 ">
                <div className="mx-auto max-w-[80rem]">
                    <div className="my-20">
                        <h3>Focusing on Quality Material, Good Design</h3>
                        <p>
                            Donec non interdum nisl. Sed ut est ac lacus sodales
                            convallis. Nam non velit justo. Mauris vel ultrices
                            tortor. Proin bibendum magna porttitor porttitor
                            suscipit. Praesent sit amet consequat eros. Quisque
                            ullamcorper ornare vulputate. Nam sodales sem id
                            diam sollicitudin, id lobortis tellus tincidunt.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <picture>
                            <img
                                src={AboutUs1}
                                alt="About July: Crafting Fashion Stories, Defining Elegance in Every Thread"
                                loading="lazy"
                                width={"100%"}
                                height={"100%"}
                            />
                        </picture>
                        <picture>
                            <img
                                src={AboutUs2}
                                alt="About July: Crafting Fashion Stories, Defining Elegance in Every Thread"
                                loading="lazy"
                                width={"100%"}
                                height={"100%"}
                            />
                        </picture>
                    </div>
                    <div>
                        <p>Our quality promise</p>
                        <h3>We Developed Products We Need</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            <div>
                                <picture>
                                    <img src={Design} alt="" />
                                </picture>
                                <h4>Simplicity in design</h4>
                                <p>
                                    Etiam eu turpis tincidunt, vehicula mi ut,
                                    imperdiet sem
                                </p>
                            </div>
                            <div>
                                <picture>
                                    <img src={Confidence} alt="" />
                                </picture>
                                <h4>Confidence in comfort</h4>
                                <p>
                                    Etiam eu turpis tincidunt, vehicula mi ut,
                                    imperdiet sem
                                </p>
                            </div>
                            <div>
                                <picture>
                                    <img src={Natural} alt="" />
                                </picture>
                                <h4>Make from natural</h4>
                                <p>
                                    Etiam eu turpis tincidunt, vehicula mi ut,
                                    imperdiet sem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default AboutUs;
