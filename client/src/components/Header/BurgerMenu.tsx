import React, {FC} from "react";
import CloseButton from "../UI/CloseButton/CloseButton";
import {togglerHandlerType} from "../../hooks/useToggler";

interface IBurgerMenu {
    burgerVisible: boolean,
    burgerClickHandler: togglerHandlerType,
}

const BurgerMenu: FC<IBurgerMenu> = ({burgerVisible, burgerClickHandler}) => {
    return (
        <div className={`burger-menu ${burgerVisible ? "burger-menu--active" : ""}`}>
            <div className="burger-menu__header">
                <h2 className="main-h2">меню</h2>
                <CloseButton setState={burgerClickHandler}/>
            </div>
            <div className="burger-menu__body">
                <ul className="burger-menu__list burger-menu__navigation">
                    <li className="burger-menu__list-item"><a href="">О компании</a></li>
                    <li className="burger-menu__list-item"><a href="">Новости</a></li>
                    <li className="burger-menu__list-item"><a href="">Оптовикам</a></li>
                    <li className="burger-menu__list-item"><a href="">Контакты</a></li>
                </ul>
                <ul className="burger-menu__list burger-menu__user-actions">
                    <li className="burger-menu__list-item">Регистрация</li>
                    <li className="burger-menu__list-item">Вход</li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;