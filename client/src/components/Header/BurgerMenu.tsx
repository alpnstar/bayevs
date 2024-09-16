import React, {FC} from "react";
import CloseButton from "../UI/CloseButton/CloseButton";
import {togglerHandlerType} from "../../hooks/useToggler";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/ROUTES";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {userActions} from "../../store/slices/userSlice";

interface IBurgerMenu {
    burgerVisible: boolean,
    burgerClickHandler: togglerHandlerType,
}

const BurgerMenu: FC<IBurgerMenu> = ({burgerVisible, burgerClickHandler}) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer.userProfile);
    return (
        <div className={`burger-menu ${burgerVisible ? "burger-menu--active" : ""}`}>
            <div className="burger-menu__header">
                <h2 className="main-h2">меню</h2>
                <CloseButton setState={burgerClickHandler}/>
            </div>
            <div className="burger-menu__body">
                <ul className="burger-menu__list burger-menu__navigation">
                    <li className="burger-menu__list-item">
                        <NavLink onClick={() => burgerClickHandler()} to="/about-company">О компании</NavLink>
                    </li>
                    <li className="burger-menu__list-item">
                        <NavLink onClick={() => burgerClickHandler()} to="/news">Новости</NavLink>
                    </li>
                    <li className="burger-menu__list-item">
                        <NavLink onClick={() => burgerClickHandler()} to="/wholesalers">Оптовикам</NavLink>
                    </li>
                    <li className="burger-menu__list-item">
                        <NavLink onClick={() => burgerClickHandler()} to="/contacts">Контакты</NavLink>
                    </li>
                </ul>
                <ul className="burger-menu__list burger-menu__user-actions">
                    <li className="burger-menu__list-item"><NavLink onClick={() => burgerClickHandler()}
                                                                    to={ROUTES.orders}>Заказы</NavLink></li>
                    <li className="burger-menu__list-item"><NavLink onClick={() => burgerClickHandler()}
                                                                    to={ROUTES.cart}>Корзина</NavLink></li>
                    {!user ? <>
                        <li className="burger-menu__list-item"><NavLink onClick={() => burgerClickHandler()}
                                                                        to={ROUTES.registration}>Регистрация</NavLink>
                        </li>
                        <li className="burger-menu__list-item"><NavLink onClick={() => burgerClickHandler()}
                                                                        to={ROUTES.authorization}>Вход</NavLink></li>

                    </> : <li className="burger-menu__list-item"
                              onClick={() => {
                                  dispatch(userActions.logoutUser());
                                  burgerClickHandler();
                              }}>Выход</li>}

                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;