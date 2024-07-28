import React, {FC} from "react";
import {IProductsItem} from "../../types/types";
import {Link} from "react-router-dom";

interface IProductsItemProps {
    product: IProductsItem,
}

const ProductsItem: FC<IProductsItemProps> = ({product}) => {
    return (
        <Link to={"/product"} >
            <li className="products__item">
                <div className="products__item-img"><img src={product.img} alt=""/></div>
                <button className="products__item-fast-view">
                    Быстрый просмотр
                </button>
                <span className="products__item-title">{product.title}</span>
            </li>
        </Link>
    );
};

export default ProductsItem;