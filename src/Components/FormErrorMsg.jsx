const FormErrorMsg = ({ message }) => {
    return (
        <div className="absolute z-40 mt-3 top-full left-0 text-white">
            <p
                className="text-p px-8 py-4 bg-red-700 rounded-md relative after:absolute 
            after:content-[''] z-30 after:-top-3 after:left-3 after:border-solid after:border-b-red-700 after:border-b-8 
            after:border-x-transparent after:border-x-[1rem] after:border-t-0"
            >
                {message}
            </p>
        </div>
    );
};

export default FormErrorMsg;
