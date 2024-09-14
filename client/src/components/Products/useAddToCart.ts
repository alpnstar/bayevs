import {useAppDispatch} from "../../store/hooks";
import React from "react";
import {cartActions} from "../../store/slices/cartSlice";
import {Product} from "../../types/types";
import {SizesState} from "../ProductSingle/ProductSingle";


export default function addToCart(product: Product, sizes:SizesState) {
    const dispatch = useAppDispatch();

    return function (e: React.MouseEvent<HTMLButtonElement>): void {

        e.preventDefault();
        dispatch(cartActions.addItem({
            id: product.id,
            attributes: product.attributes,
            addedSizes: sizes,
        }));
    }
}
