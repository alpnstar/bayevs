import {useAppDispatch} from "../../store/hooks";
import React from "react";
import {cartActions} from "../../store/slices/cartSlice";
import {IProductsItem} from "../../types/types";


export default function addToCart(product: IProductsItem) {
    const dispatch = useAppDispatch();

    return function (e: React.MouseEvent<HTMLButtonElement>): void {

        e.preventDefault();
        dispatch(cartActions.addItem({
            id: product.id,
            quantity: 1,
            maxQuantity: product.maxQuantity,
            price: product.price,
            title: product.title,
            img: product.img
        }));
    }
}
