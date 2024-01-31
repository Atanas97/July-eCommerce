const FormErrorMsg = ({ message }) => {
    return (
        <div className="absolute z-40 px-8 py-4 top-full left-0 rounded-md bg-red-700 text-white">
            <p className="text-p">{message}</p>
        </div>
    );
};

export default FormErrorMsg;
