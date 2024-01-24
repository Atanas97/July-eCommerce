import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//Import slide images
import SlideOneImg from "../Assets/slider/slide_1.jpg";
import SlideTwoImg from "../Assets/slider/slide_2.jpg";
import SliderSlide from "./SliderSlide";

const sliderData = [
    {
        id: 1,
        image: SlideOneImg,
        subheader: "Holiday 2023",
        heading: "Women's new arrivals",
        paragraph: "new colors, now available in men's sizing",
        button: "View Collection",
        urlstate: "women's clothing",
    },
    {
        id: 2,
        image: SlideTwoImg,
        subheader: "Holiday 2023",
        heading: "Luxury without labels",
        paragraph: "Explore new-in products and future bestsellers.",
        button: "View Collection",
        urlstate: "/",
    },
];

export default () => {
    const pagination = {
        clickable: true,
    };

    const mappedSlides = sliderData.map((slide) => (
        <SwiperSlide key={slide.id} className="relative h-dvh">
            <SliderSlide data={slide} />
        </SwiperSlide>
    ));
    return (
        <Swiper slidesPerView={1} className="h-dvh" pagination={pagination} modules={[Pagination]}>
            {mappedSlides}
        </Swiper>
    );
};
