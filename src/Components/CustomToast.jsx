import React from "react";
import toast from "react-hot-toast";

const CustomToast = ({ newItem, t }) => {
    return (
        <div
            className={`${
                t.visible ? "opacity-100" : "opacity-0"
            } pointer-events-auto flex w-full max-w-xl rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-150`}
        >
            <div className="w-0 flex-1 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-14 w-14 rounded-full"
                            src={newItem.image}
                            alt={newItem.title}
                        />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="font-medium text-gray-900">
                            {newItem.title}
                        </p>
                        <p className="mt-1 text-gray-500">View Cart</p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CustomToast;
