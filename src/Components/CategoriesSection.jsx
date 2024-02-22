import useFetchApi from "../Hooks/useFetchApi";
import CategoriesSectionItem from "./CategoriesSectionItem";
import Loader from "./Loader";
import Section from "./Section";

const CategoriesSection = ({ title }) => {
    const { apiData, isLoading, serverError } = useFetchApi(
        `https://fakestoreapi.com/products/categories`,
    );

    const MappedCategories = apiData.map((item) => (
        <CategoriesSectionItem data={item} key={item} />
    ));

    return (
        <Section>
            <div>
                <h2 className="mt-[6rem] text-5xl">{title}</h2>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {isLoading ? <Loader /> : MappedCategories}
                </div>
            </div>
        </Section>
    );
};

export default CategoriesSection;
