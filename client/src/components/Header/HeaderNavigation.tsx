import React, {FC} from "react";
import useViewLogo from "./useViewLogo";
import {NavLink} from "react-router-dom";
import {SITE_NAME} from "../../utils/CONSTS";

const HeaderNavigation: FC = () => {
    const [displayLogo] = useViewLogo(false);

    return (
        <nav className="header__navigation">
            <a href="/" className={`logo ${!displayLogo ? "--logo-hidden" : ""}`}>{SITE_NAME}</a>
            <ul className="main-style-list__list">
                <NavLink className="main-style-list__item" to="/about-company">О компании</NavLink>
                <NavLink className="main-style-list__item" to="/news">Новости</NavLink>
                <NavLink className="main-style-list__item" to="/wholesalers">Оптовикам</NavLink>
                <NavLink className="main-style-list__item" to="/contacts">Контакты</NavLink>
            </ul>
        </nav>

    )
        ;
};

export default HeaderNavigation;