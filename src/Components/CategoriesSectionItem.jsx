import React from "react";

const CategoriesSectionItem = ({ data }) => {
    return (
        <div className="bg-gray-100">
            <figure className="p-8">
                <img
                    src="https://www.w3schools.com/tags/pic_trulli.jpg"
                    alt="Trulli"
                />
                <figcaption className="text-center pt-8">
                    <button className="bg-white rounded-2xl py-4 px-8 transition ease-in-out duration-300 hover:ease-in hover:bg-slate-500">
                        {data}
                    </button>
                </figcaption>
            </figure>
        </div>
    );
};

export default CategoriesSectionItem;
