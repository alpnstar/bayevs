import React, {FC} from "react";
import "./cart.scss";
import {useAppSelector} from "../../store/hooks";
import {CartItem} from "./CartItem";
import {MainButton} from "../UI/MainButton/MainButton";


export const Cart: FC = () => {
    const cart = useAppSelector(state => state.cartReducer);
    const profile = useAppSelector(state => state.userReducer.userProfile);
    return (profile ?
        <div className="cart">
            <div className="cart__wrapper container">
                {cart.items.length === 0 ? <h2 className="cart__empty main-h2">Корзина пуста</h2> : <>
                    <div className="cart__list">
                        {cart.items.map(item => <CartItem item={item}/>)}

                    </div>
                    <div className="cart__info">
                        <div className="cart__summary">
                            <span className="cart__summary-text">Итого: </span>
                            <span className="cart__summary-total">{cart.totalSum} {cart.currency}</span>
                        </div>

                        <div className="cart__actions">
                            <MainButton className="cart__actions-button" onClick={() => 1}
                                        text="Перейти к оформлению"/>

                        </div>
                    </div>
                </>}
            </div>
        </div>: <div>
                <div className="container"><span className="notification">
                    Вы не авторизованы
                </span></div>
            </div>

    );
};