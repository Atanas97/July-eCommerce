import Section from "./Section";

import LimitedOfferImg from "../Assets/limited_offer.jpg";
import { Link } from "react-router-dom";

const LimitedOffer = () => {
    return (
        <Section>
            <div className=" mx-auto my-40 grid grid-cols-1 md:grid-cols-2">
                <div>
                    <picture>
                        <img src={LimitedOfferImg} alt="Limited offer" />
                    </picture>
                </div>
                <div className="bg-orange p-20 text-center grid place-items-center">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-h4 font-normal">Sale Event</h4>
                        <h2 className="text-h2">Summer Shirt Limited Offer – $20</h2>
                        <p className="text-p">Until 12/27/21. Use code FESTIVE at checkout</p>
                        <Link
                            to="/products"
                            state={{ baseUrl: "/" }}
                            className="bg-black rounded-md px-16 py-5 text-white self-center transition duration-200 hover:opacity-90"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default LimitedOffer;
