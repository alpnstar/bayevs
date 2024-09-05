import React, {FC} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/ROUTES";

const HeaderUserActions: FC = () => {
    return (
        <div className="header__user-actions">
            <ul className="main-style-list__list">
                {/*<li className="main-style-list__item "><a href="#">Регистрация</a></li>*/}
                {/*<li className="main-style-list__item "><a href="#">Вход</a></li>*/}
                <Link to={ROUTES.cart}>
                    <li className="main-style-list__item ">Корзина</li>
                </Link>
            </ul>
        </div>

    );
};

export default HeaderUserActions;