import React from "react";
import FormErrorMsg from "./FormErrorMsg";

const CartDeliveryForm = ({ register, errors }) => {
    console.log(errors);
    return (
        <div>
            <h2 className="text-h2 my-6">Billing details</h2>
            <form>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="First Name *"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("firstName", {
                                required: "Please enter a valid first name.",
                                minLength: 3,
                                pattern: /^[A-Za-z]+$/i,
                                // message: "Please enter a valid first name.",
                            })}
                        />
                        {errors.firstName && <FormErrorMsg message={errors.firstName.message} />}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Last Name *"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("lastName", {
                                required: "Please enter a valid last name.",
                                minLength: 3,
                                pattern: /^[A-Za-z]+$/i,
                            })}
                        />
                        {errors.lastName && <FormErrorMsg message={errors.lastName?.message} />}
                    </div>
                    <div className="relative">
                        <input
                            type="tel"
                            placeholder="Phone *"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("phone", {
                                required: "Please enter a valid phone number.",
                                minLength: 3,
                                pattern: /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/,
                            })}
                        />
                        {errors.phone && <FormErrorMsg message={errors.phone?.message} />}
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email *"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("email", {
                                required: "Please enter a valid email address.",
                                minLength: 3,
                                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            })}
                        />
                        {errors.email && <FormErrorMsg message={errors.email?.message} />}
                    </div>
                </div>
                <div className="grid mt-6 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Town / City *"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("city", {
                                required: "Please enter a valid city.",
                                minLength: 3,
                                pattern:
                                    /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
                            })}
                        />
                        {errors.city && <FormErrorMsg message={errors.city?.message} />}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Street Address *"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("streetAddress", {
                                required: "Please enter a valid street address.",
                                minLength: 3,
                            })}
                        />
                        {errors.streetAddress && (
                            <FormErrorMsg message={errors.streetAddress?.message} />
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="ZIP Code"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("zipCode", {
                                minLength: 4,
                            })}
                        />
                        {errors.zipCode && (
                            <FormErrorMsg message="Please enter a valid zip code." />
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Business Name"
                            className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                            {...register("businessName", {
                                minLength: 3,
                            })}
                        />
                        {errors.businessName && (
                            <FormErrorMsg message="Please enter a valid business name." />
                        )}
                    </div>
                </div>
                <div className="mt-6">
                    <textarea
                        {...register("message")}
                        className="border border-gray-300 text-gray-900 rounded-lg block w-full p-4 outline-none"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                {/* <button type="submit">send</button> */}
            </form>
        </div>
    );
};

export default CartDeliveryForm;
