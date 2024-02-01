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
    const { form, loading, emailSendError, username, userMessage, handleNewsletterSubmit } =
        EmailSend(TEMPLATE_ID);

    const onSubmit = (data) => {
        handleNewsletterSubmit();
    };
    return (
        <form className="mb-8 relative" ref={form} onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loader />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div>
                    <input
                        {...register("user_name", {
                            required: true,
                        })}
                        type="text"
                        name="user_name"
                        ref={username}
                        placeholder="Name *"
                        required
                        className="border rounded-lg border-[#ccc] p-4 w-full font-light focus:border-orange outline-none user select-none  appearance-none"
                    />
                </div>
                <div className="relative">
                    <input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid.",
                            },
                        })}
                        type="email"
                        placeholder="Email *"
                        className="border rounded-lg border-[#ccc] p-4 w-full font-light focus:border-orange outline-none user select-none  appearance-none"
                    />

                    {errors.email && <FormErrorMsg message={errors.email?.message} />}
                </div>
                <div>
                    <input
                        {...register("phone")}
                        type="text"
                        placeholder="Phone number"
                        className="border rounded-lg border-[#ccc] p-4 w-full font-light focus:border-orange outline-none user select-none  appearance-none"
                    />
                </div>
                <div>
                    <input
                        {...register("website")}
                        type="text"
                        placeholder="Website"
                        className="border rounded-lg border-[#ccc] p-4 w-full font-light focus:border-orange outline-none user select-none  appearance-none"
                    />
                </div>
            </div>
            <div>
                <textarea
                    {...register("textarea")}
                    cols="30"
                    rows="10"
                    name="message"
                    placeholder="Message"
                    ref={userMessage}
                    className="border rounded-lg border-[#ccc] p-4 w-full font-light focus:border-orange outline-none user select-none  appearance-none mt-10"
                ></textarea>
            </div>
            <button
                type="submite"
                className="block mx-auto mt-10 border-lg rounded-lg bg-black text-white py-6 px-20 transition duration-500 hover:opacity-90"
            >
                Post Message
            </button>
        </form>
    );
};

export default ContactusForm;
