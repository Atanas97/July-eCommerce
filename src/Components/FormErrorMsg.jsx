const FormErrorMsg = ({ message }) => {
    return (
        <div className="absolute left-0 top-full z-40 mt-3 text-white">
            <p
                className="relative z-30 rounded-md bg-red-700 px-8 py-4 text-p 
            after:absolute after:-top-3 after:left-3 after:border-x-[1rem] after:border-b-8 after:border-t-0 after:border-solid 
            after:border-x-transparent after:border-b-red-700 after:content-['']"
            >
                {message}
            </p>
        </div>
    );
};

export default FormErrorMsg;
