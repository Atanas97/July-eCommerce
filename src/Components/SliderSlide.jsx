import React from "react";
import Section from "./Section";
import { Link } from "react-router-dom";

const SliderSlide = ({ data }) => {
    const { subheader, heading, paragraph, button, image, urlstate } = data;
    return (
        <div className="relative h-full">
            <picture className="block h-full">
                <img
                    src={image}
                    alt={heading}
                    className="h-full object-cover"
                    width={"100%"}
                    height={"100%"}
                    loading="lazy"
                />
            </picture>
            <Section className="absolute inset-0 flex items-center">
                <div className="flex flex-col gap-9">
                    <h4 className="text-h4">{subheader}</h4>
                    <h1 className="text-h1">{heading}</h1>
                    <p className="text-p">{paragraph}</p>
                    <Link
                        to="/products"
                        state={{ baseUrl: urlstate }}
                        className="self-start rounded-md bg-black px-16 py-5 text-white transition duration-200 hover:opacity-90"
                    >
                        {button}
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default SliderSlide;
