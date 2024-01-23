import React, { useMemo } from "react";
import Section from "../Section";
import useFetchApi from "../../Hooks/useFetchApi";
import Card from "../Card";
import Loader from "../Loader";

const BestSellers = ({ title }) => {
    const { apiData, isLoading, isError } = useFetchApi(
        `https://fakestoreapi.com/products?limit=8`
    );
    const MappedData = useMemo(() => {
        return apiData.map((item) => <Card data={item} key={item.id} />);
    }, []);
    console.log(MappedData);

    return (
        <Section>
            <h2 className="mt-10 text-h2 text-center">{title}</h2>
            {/* <div>
                <button>Mens</button>
                <button>Womens</button>
                <button>Kids</button> 
            </div> */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {isLoading ? <Loader /> : MappedData}
                {isError && isError}
            </div>
        </Section>
    );
};

export default BestSellers;
