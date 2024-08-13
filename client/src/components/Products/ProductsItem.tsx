import React, {FC} from "react";
import {IProductsItem} from "../../types/types";
import {Link} from "react-router-dom";
import addToCart from "./useAddToCart";

interface IProductsItemProps {
    product: IProductsItem,
}

const ProductsItem: FC<IProductsItemProps> = ({product}) => {
    const addToCartHandler = addToCart(product);

    return (
        <Link to="/product">
            <li className="products__item">
                <div className="products__item-img"><img src={product.img} alt=""/></div>
                <button onClick={addToCartHandler} className="products__item-fast-view">
                    Добавить в корзину
                </button>
                <span className="products__item-title">{product.title}</span>
                <span className="products__item-price">{product.price} ₽</span>
            </li>
        </Link>
    );
};

export default ProductsItem;