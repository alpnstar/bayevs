import React, {FC} from "react";
import IMG from "../../../public/images/model.jpg";
import {productsType} from "../../types/types";
import ProductsList from "../Products/ProductsList";

const data: productsType = [{
    img: IMG,
    title: "Панама LF-Label Tiger, хлопок, цвет чёрный 899901"
}];
const PopularProducts: FC = () => {
    return (
        <section className="popular-products">
            <div className="popular-products-wrapper container">
                <h2 className="main-h2">
                    Новинки головных уборов LF-LABEL
                </h2>
                <ProductsList products={data}/>
            </div>
        </section>
    );
};

export default PopularProducts;