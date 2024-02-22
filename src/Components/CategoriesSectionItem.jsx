import React from "react";

const CategoriesSectionItem = ({ data }) => {
    return (
        <div className="bg-gray-100">
            <figure className="p-8">
                <img
                    src="https://www.w3schools.com/tags/pic_trulli.jpg"
                    alt="Trulli"
                />
                <figcaption className="pt-8 text-center">
                    <button className="rounded-2xl bg-white px-8 py-4 transition duration-300 ease-in-out hover:bg-slate-500 hover:ease-in">
                        {data}
                    </button>
                </figcaption>
            </figure>
        </div>
    );
};

export default CategoriesSectionItem;
