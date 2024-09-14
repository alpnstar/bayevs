import React, {FC} from "react";
import "./cart.scss";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {CartItem} from "./CartItem";
import {sendOrder} from "../../store/slices/cartSlice";


export const Cart: FC = () => {
    const cart = useAppSelector((state) => state.cartReducer);
    const user = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();
    console.log(cart.orderData);
    return (user.userProfile ? (
        cart.items.length ? (
            <div className="cart">
                <div className="cart__wrapper container">
                    <h1 className="main-h1">Корзина</h1>
                    <table className="cart__table">
                        <thead>
                        <tr className="cart__table-header">
                            <th>Фото</th>
                            <th className="cart__product-name">Товар</th>
                            <th>Цена, руб.</th>
                            <th>Кол-во по размерам</th>
                            <th>Сумма, руб.</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.items.map((item) => (
                            <CartItem key={item.id} cartItem={item}/>
                        ))}
                        <tr className="cart__total-row">
                            <td colSpan={4} className="cart__total-label"><b>Итого на сумму:</b></td>
                            <td colSpan={2} className="cart__total-amount"><b>{cart.totalSum + ' ' + cart.items[0].attributes.skus[0].attributes.price.icon}</b></td>
                        </tr>

                        </tbody>
                    </table>
                    <div className="cart__actions">
                        <button className="cart__submit main-button"
                                onClick={() => dispatch(sendOrder({data: cart.orderData, token: user.accessToken}))}>Отправить заказ
                        </button>
                    </div>
                </div>
            </div>
        ) : <div>
            <div className="container">
                <span className="notification">Корзина пуста</span>
            </div>
        </div>
    ) : (
        <div>
            <div className="container">
                <span className="notification">Вы не авторизованы</span>
            </div>
        </div>
    ));
};
