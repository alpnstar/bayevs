import React, {FC} from "react";
import {Product} from "../../types/types";
import {Link} from "react-router-dom";
import addToCart from "./useAddToCart";
import {useAppSelector} from "../../store/hooks";

interface IProductsItemProps {
    product: Product,
}

const ProductsItem: FC<IProductsItemProps> = ({product}) => {
    const profile = useAppSelector(state => state.userReducer.userProfile);
    return (
        <Link to={`/product/${product.id}`}>
            <li className="products__item">
                <div className="products__item-img"><img
                    src={product.attributes.media[0].attributes.generated_conversions.list} alt=""/>
                </div>
                {/*{profile && <button  className="products__item-fast-view">*/}
                {/*    Добавить в корзину*/}
                {/*</button>}*/}
                <span className="products__item-title">{product.attributes.name}</span>
                {profile && <span
                    className="products__item-price">{product.attributes.skus[0].attributes.price.formatted}</span>}
            </li>
        </Link>
    );
};

export default ProductsItem;