import React, {FC} from "react";
import "./cart.scss";
import {MainButton} from "../UI/MainButton/MainButton";
import {useAppSelector} from "../../store/hooks";
import {CartItem} from "./CartItem";

interface ICartProps {
    foo: string;
}

export const Cart: FC<ICartProps> = ({foo}) => {
    const cart = useAppSelector(state => state.cartReducer);

    return (
        <div className="cart">
            <div className="cart__wrapper container">
                <div className="cart__list">
                    {cart.items.map(item => <CartItem item={item}/>)}

                </div>
                <div className="cart__info">
                    <div className="cart__summary">
                        <span className="cart__summary-text">Итого: {cart.totalSum} ₽</span>
                        <span className="cart__summary-total"></span>
                    </div>

                    <div className="cart__actions">
                        <MainButton className="cart__actions-button" onClick={() => 1}
                                    text="Перейти к оформлению"/>

                    </div>
                </div>
            </div>
        </div>

    );
};