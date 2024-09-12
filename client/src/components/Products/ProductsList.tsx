import React, {FC} from "react";
import {Product} from "../../types/types";
import ProductsItem from "./ProductsItem";
import "./products.scss";

interface IProductsProps {
    products: Product[],
}

const ProductsList: FC<IProductsProps> = ({products}) => {


    return (
        <>
            <ul className="products__list">
                {products.map((item, index) => <ProductsItem key={index} product={item}/>)}
            </ul>
        </>

    );
};

export default ProductsList;

