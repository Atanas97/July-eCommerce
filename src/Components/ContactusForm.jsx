import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmailSend from "../utils/EmailSend";

import FormErrorMsg from "../Components/FormErrorMsg";
import Loader from "../Components/Loader";

const ContactusForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACTUS;
    const {
        form,
        loading,
        emailSendError,
        username,
        userMessage,
        handleNewsletterSubmit,
    } = EmailSend(TEMPLATE_ID);

    console.log(errors);
    const onSubmit = (data, e) => {
        // handleNewsletterSubmit(e);
        console.log(data);
        // navigate("/contactus-success/#success");
    };

    const onError = () => {
        console.log("error");
    };

    return (
        <form
            className="relative mb-8"
            ref={form}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            {loading && <Loader />}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
                <div className="relative">
                    <input
                        {...register("user_name", {
                            required: "Please provide a valid name.",
                            pattern: {
                                minLength: 4,
                                pattern: /^[A-Za-z]/i,
                            },
                        })}
                        type="text"
                        name="user_name"
                        ref={username}
                        placeholder="Name *"
                        className="user w-full select-none appearance-none rounded-lg border border-[#ccc] p-4 font-light outline-none  focus:border-orange"
                    />
                    {errors.user_name && (
                        <FormErrorMsg message={errors.user_name.message} />
                    )}
                </div>
                <div className="relative">
                    <input
                        {...register("email", {
                            required: "Please enter a valid email address.",
                            pattern: {
                                minLength: 3,
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            },
                        })}
                        type="email"
                        placeholder="Email *"
                        className="user w-full select-none appearance-none rounded-lg border border-[#ccc] p-4 font-light outline-none  focus:border-orange"
                    />
                    {errors.email && (
                        <FormErrorMsg message={errors.email.message} />
                    )}
                </div>
                <div className="relative">
                    <input
                        {...register("phone", {
                            minLength: 3,
                            pattern:
                                /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/,
                        })}
                        type="text"
                        placeholder="Phone number"
                        className="user w-full select-none appearance-none rounded-lg border border-[#ccc] p-4 font-light outline-none  focus:border-orange"
                    />
                    {errors.phone && (
                        <FormErrorMsg message="Please enter a valid phone number." />
                    )}
                </div>
                <div className="relative">
                    <input
                        {...register("website", {
                            minLength: 3,
                        })}
                        type="text"
                        placeholder="Website"
                        className="user w-full select-none appearance-none rounded-lg border border-[#ccc] p-4 font-light outline-none  focus:border-orange"
                    />
                    {errors.website && (
                        <FormErrorMsg message="Please enter a valid website." />
                    )}
                </div>
            </div>
            <div className="relative">
                <textarea
                    {...register("textarea", {
                        minLength: 5,
                    })}
                    cols="30"
                    rows="10"
                    name="message"
                    placeholder="Message"
                    ref={userMessage}
                    className="user mt-10 w-full select-none appearance-none rounded-lg border border-[#ccc] p-4 font-light  outline-none focus:border-orange"
                ></textarea>
                {errors.textarea && (
                    <FormErrorMsg message="Please leave us a well rounded message!" />
                )}
            </div>
            <button
                type="submit"
                className="border-lg mx-auto mt-10 block rounded-lg bg-black px-20 py-6 text-white transition duration-500 hover:opacity-90"
            >
                Post Message
            </button>
        </form>
    );
};

export default ContactusForm;
