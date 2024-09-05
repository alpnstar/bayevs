import React, {FC} from "react";
import IMG from "../../../public/images/model.jpg";
import ProductsList from "../Products/ProductsList";
import {useGetProductsQuery} from "../../store/query/productsApi";


const PopularProducts: FC = () => {
    const {data, isLoading} = useGetProductsQuery();


    return (data &&
        <section className="popular-products">
            <div className="popular-products-wrapper container">
                <h2 className="main-h2">
                    Новинки головных уборов BAYEVS
                </h2>
             <ProductsList products={data.data}/>
            </div>
        </section>
    );
};

export default PopularProducts;