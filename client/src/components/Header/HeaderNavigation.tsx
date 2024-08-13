import React, {FC} from "react";
import useViewLogo from "./useViewLogo";

const HeaderNavigation: FC = () => {
    const [displayLogo] = useViewLogo(false);

    return (
        <nav className="header__navigation">
            <a href="/" className={`logo ${!displayLogo ? "--logo-hidden" : ""}`}>LF LABEL</a>
            <ul className="main-style-list__list  ">
                <li className="main-style-list__item"><a href="#">О компании</a></li>
                <li className="main-style-list__item"><a href="#">Новости</a></li>
                <li className="main-style-list__item"><a href="#">Оптовикам</a></li>
                <li className="main-style-list__item"><a href="#">Контакты</a></li>
            </ul>
        </nav>

    )
        ;
};

export default HeaderNavigation;