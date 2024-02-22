import React, { useMemo } from "react";
import Section from "./Section";
import useFetchApi from "../Hooks/useFetchApi";
import Card from "./Card";
import Loader from "./Loader";

const BestSellers = ({ title }) => {
    const { apiData, isLoading, isError } = useFetchApi(
        `https://fakestoreapi.com/products?limit=8`,
    );
    const MappedData = useMemo(() => {
        return apiData.map((item) => <Card data={item} key={item.id} />);
    }, [apiData]);

    return (
        <Section className="my-40">
            <h2 className="text-center text-h2 font-normal">{title}</h2>

            <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {isLoading ? <Loader /> : MappedData}
                {isError && isError}
            </div>
        </Section>
    );
};

export default BestSellers;
