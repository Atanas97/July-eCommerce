import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

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
        <>
            <div className="text-center p-8">
                <h2 className="text-h1 font-normal">Customer Reviews</h2>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={pagination}
                    modules={[Pagination, Autoplay]}
                >
                    {TestimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="mx-auto my-20 max-w-4xl text-center">
                                <q className="text-h3 font-light">{testimonial.testimonialText}</q>
                                <p className="text-p mt-6">{testimonial.testimonialFrom}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Testimonials;
