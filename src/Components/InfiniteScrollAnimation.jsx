import React from "react";

import Hipster from "../Assets/animation/hipster.svg";
import Microwave from "../Assets/animation/microwave.svg";
import Natural from "../Assets/animation/natural.svg";
import Retro from "../Assets/animation/retro.svg";
import Rose from "../Assets/animation/rose.svg";
import Saturday from "../Assets/animation/saturday.svg";
import Urban from "../Assets/animation/urban.svg";
import Section from "./Section";

const InfiniteScrollAnimation = () => {
    const logos = [
        { src: Hipster, alt: "Hipster" },
        { src: Microwave, alt: "Microwave" },
        { src: Natural, alt: "Natural" },
        { src: Retro, alt: "Retro" },
        { src: Rose, alt: "Rose" },
        { src: Saturday, alt: "Saturday" },
        { src: Urban, alt: "Urban" },
    ];

    return (
        <Section className="my-40">
            <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
                <div className="inline-flex w-full flex-nowrap justify-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                        {logos.map((logo, index) => (
                            <li key={index}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={"auto"}
                                    height={"auto"}
                                    loading="lazy"
                                />
                            </li>
                        ))}
                    </ul>
                    <ul
                        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                        aria-hidden="true"
                    >
                        {logos.map((logo, index) => (
                            <li key={index}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={"auto"}
                                    height={"auto"}
                                    loading="lazy"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default InfiniteScrollAnimation;
