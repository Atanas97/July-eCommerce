import React, { useState } from "react";

const DropdownBtn = ({ setSelectedFilter, filterTypes }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState("Default");

    const {
        setDefaultData,
        defaultSort,
        AlphabeticalAtoZ,
        AlphabeticalZtoA,
        PriceLtoH,
        PriceHtoL,
    } = filterTypes;

    const handleFilterChange = (value, event) => {
        setSelectedFilter(value);
        setIsVisible(false);
        setTitle(event.target.textContent);
    };

    return (
        <div className="relative mb-20 inline-block">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="inline-flex items-center justify-between rounded-lg border px-5 py-2.5 text-center font-medium"
                type="button"
            >
                {title}
                <svg
                    className="ms-3 h-2.5 w-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div
                className={`absolute z-10 w-full min-w-80 divide-y divide-gray-100 rounded-lg bg-white shadow ${
                    isVisible ? "block" : "hidden"
                }`}
            >
                <ul className="py-2 text-gray-700">
                    <li className="cursor-pointer">
                        <a
                            onClick={(e) => handleFilterChange(defaultSort, e)}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Default
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a
                            onClick={(e) =>
                                handleFilterChange(AlphabeticalAtoZ, e)
                            }
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Alphabetical: A to Z
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a
                            onClick={(e) =>
                                handleFilterChange(AlphabeticalZtoA, e)
                            }
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Alphabetical: Z to A
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleFilterChange(PriceLtoH, e)}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Price: Low to High
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a
                            onClick={(e) => handleFilterChange(PriceHtoL, e)}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Price: High to Low
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownBtn;
