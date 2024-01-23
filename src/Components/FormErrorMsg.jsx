const FormErrorMsg = ({ message }) => {
    return (
        <div className="absolute px-8 py-4 top-full left-0 rounded-md bg-red text-white">
            <p className="text-p">{message}</p>
        </div>
    );
};

export default FormErrorMsg;
