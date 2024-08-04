import React, {FC, useState} from "react";
import './cart.scss';
import {MainButton} from "../UI/MainButton/MainButton";

interface ICartProps {
    foo: string;
}

export const Cart: FC<ICartProps> = ({foo}) => {
    return (
        <div className="cart">
            <div className="cart__wrapper container">
                <div className="cart__list">
                    <div className="cart__item">
                        <div className="cart__item-info">
                            <img className="cart__item-image" src="path/to/black-wallet-image.jpg"
                                 alt="черный кошелек"/>
                            <div className="cart__item-description">
                                <h2 className="cart__item-title">Ryoko кошелек Smith Passport Wallet (черный)</h2>
                                <div className="cart__item-quantity">
                                    <button className="cart__item-quantity-button">-</button>
                                    <span className="cart__item-quantity-number">1</span>
                                    <button className="cart__item-quantity-button">+</button>
                                </div>
                                <span className="cart__item-price">11 590 ₽/шт</span>
                            </div>
                        </div>
                        <span className="cart__item-total-price">11 590 ₽</span>
                        <button className="cart__item-remove-button">×</button>
                    </div>

                    <div className="cart__item">
                        <div className="cart__item-info">
                            <img className="cart__item-image" src="path/to/brown-wallet-image.jpg"
                                 alt="коричневый кошелек"/>
                            <div className="cart__item-description">
                                <h2 className="cart__item-title">Ryoko кошелек Smith Passport Wallet (коричневый)</h2>
                                <div className="cart__item-quantity">
                                    <button className="cart__item-quantity-button">-</button>
                                    <span className="cart__item-quantity-number">1</span>
                                    <button className="cart__item-quantity-button">+</button>
                                </div>

                                <span className="cart__item-price">11 590 ₽/шт</span>
                            </div>
                        </div>
                        <span className="cart__item-total-price">11 590 ₽</span>
                        <button className="cart__item-remove-button">×</button>
                    </div>

                </div>
                <div className="cart__info">
                    <div className="cart__summary">
                        <span className="cart__summary-text">Итого:</span>
                        <span className="cart__summary-total">23 180 ₽</span>
                    </div>

                    <div className="cart__actions">
                        <MainButton className={'cart__actions-button'} onClick={()=>console.log()} text={'Перейти к оформлению'}/>

                    </div>
                </div>
            </div>
        </div>

    )
};