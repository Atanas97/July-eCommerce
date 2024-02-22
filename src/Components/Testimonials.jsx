import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Section from "./Section";

const TestimonialsData = [
    {
        id: 1,
        testimonialFrom: "Katy Aderson",
        testimonialText:
            "As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.",
    },
    {
        id: 2,
        testimonialFrom: "Randy Workman",
        testimonialText:
            "As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.",
    },
    {
        id: 3,
        testimonialFrom: "Katy Aderson",
        testimonialText:
            "As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.",
    },
    {
        id: 4,
        testimonialFrom: "Randy Workman",
        testimonialText:
            "As women who value our health, we’re here to do what we do best - roll up our sleeves to get it done right.",
    },
];

const Testimonials = () => {
    const pagination = {
        clickable: true,
    };
    return (
        <Section className="my-40">
            <div className="text-center">
                <h2 className="mb-10 text-h1 font-normal">Customer Reviews</h2>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={pagination}
                    modules={[Autoplay]}
                >
                    {TestimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="mx-auto max-w-4xl text-center">
                                <q className="text-h3 font-light">
                                    {testimonial.testimonialText}
                                </q>
                                <p className="mt-6 text-p">
                                    {testimonial.testimonialFrom}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
};

export default Testimonials;
