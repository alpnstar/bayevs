import React, {FC} from 'react';
import {productsType} from "../../types/types";
import ProductsItem from "./ProductsItem";

interface IProductsProps {
    products: productsType,
}

const Products: FC<IProductsProps> = ({products}) => {
    return (
        <ul className="products__list">
            {products.map(item => <ProductsItem product={item}/>)}
        </ul>
    );
};

export default Products;