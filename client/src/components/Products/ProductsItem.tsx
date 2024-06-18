import React, {FC} from 'react';
import {IProductsItem} from "../../types/types";

interface IProductsItemProps {
    product: IProductsItem,
}

const ProductsItem: FC<IProductsItemProps> = ({product}) => {
    return (
        <li className="products__item">
            <div className="products__item-img"><img src={product.img} alt=""/></div>
            <button className="products__item-fast-view">
                Быстрый просмотр
            </button>
            <span className="products__item-title">{product.title}</span>
        </li>
    );
};

export default ProductsItem;