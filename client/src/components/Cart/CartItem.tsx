import React, {FC} from "react";
import {useAppDispatch} from "../../store/hooks";
import {cartActions} from "../../store/slices/cartSlice";
import {ICartItem} from "../../types/types";

interface ICartItemProps {
    item: ICartItem;
}

export const CartItem: FC<ICartItemProps> = ({item}) => {

    const dispatch = useAppDispatch();

    function decrement(quantity: number) {
        return function (): void {
            dispatch(cartActions.decrementItem({id: item.id, quantity}))
        }
    }

    function increment(quantity: number) {
        return function (): void {
            dispatch(cartActions.incrementItem({id: item.id, quantity}))
        }
    }

    function removeItemAll() {
        return decrement(item.quantity);
    }

    return (<div className="cart__item">
        <div className="cart__item-info">
            <img className="cart__item-image" src={item.img}
                 alt="коричневый кошелек"/>
            <div className="cart__item-description">
                <h2 className="cart__item-title">{item.title}</h2>
                <div className="cart__item-quantity">
                    <button className="cart__item-quantity-button" onClick={decrement(1)}>-</button>
                    <span className="cart__item-quantity-number">{item.quantity}</span>
                    <button className="cart__item-quantity-button" onClick={increment(1)}>+</button>
                </div>

                <span className="cart__item-price">{item.price} ₽</span>
            </div>
        </div>
        <span className="cart__item-total-price">{item.price * item.quantity} ₽</span>
        <button className="cart__item-remove-button" onClick={removeItemAll()}>×</button>
    </div>)

};