import { useState, useEffect } from "react";

const useFetchApi = (url) => {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const API_FETCH = await fetch(url);
                const FETCHED_DATA = await API_FETCH.json();

                //TODO: Clear out issue with this if block.
                // if(!response.ok) {
                //     throw new Error ('Failed to fetch data!')
                // }

                setApiData(FETCHED_DATA);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { apiData, isLoading, serverError };
};

export default useFetchApi;
