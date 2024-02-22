import useFetchApi from "../Hooks/useFetchApi";
import { useState } from "react";
import Overlays from "../Layout/Overlays";

import { LuPackageCheck, LuShip } from "react-icons/lu";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const QuickView = ({ id, isOpened, onClose }) => {
    // const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    // if (isOpened) {
    //     document.body.style.overflow = "hidden";
    // } else {
    //     document.body.style.overflow = "unset";
    // }

    const { apiData, isLoading, serverError } = useFetchApi(
        `https://fakestoreapi.com/products/${id}`,
    );

    const { title, image, price, description } = apiData;

    return (
        <>
            <Overlays isOpened={isOpened} onClose={onClose}>
                <div className="grid min-h-[50rem] max-w-screen-lg grid-cols-1 gap-8 bg-white p-8 md:grid-cols-2">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className="place-self-center">
                                <picture className="block max-w-[40rem]">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="object-cover"
                                    />
                                </picture>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-h2">{title}</h2>
                                <span className="my-10 block text-h1">
                                    {price}
                                </span>
                                <p className="mb-10 text-p">{description}</p>

                                <div className="mt-auto">
                                    <p className="mb-3 flex items-center gap-2 text-p">
                                        <LuShip size={28} />
                                        Free shipping over
                                        <span className="font-medium">
                                            $300
                                        </span>
                                    </p>
                                    <p className="flex flex-wrap items-center gap-2 text-p">
                                        <LuPackageCheck size={28} />
                                        Delivers in:
                                        <span className="font-medium">
                                            3-7
                                        </span>{" "}
                                        Working Days
                                        <Link
                                            to="/termsofuse"
                                            className="underline"
                                        >
                                            Learn More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Overlays>
        </>
    );
};

export default QuickView;
