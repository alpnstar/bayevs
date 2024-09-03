import {useAppDispatch} from "../../store/hooks";
import React from "react";
import {cartActions} from "../../store/slices/cartSlice";
import {Product} from "../../types/types";


export default function addToCart(product: Product) {
    const dispatch = useAppDispatch();

    return function (e: React.MouseEvent<HTMLButtonElement>): void {

        e.preventDefault();
        dispatch(cartActions.addItem({
            id: product.id,
            quantity: 1,
            attributes: product.attributes,
        }));
    }
}
