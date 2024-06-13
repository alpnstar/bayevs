import React, {FC} from 'react';

const HeaderNavigation: FC = () => {
    return (
        <nav className="header__navigation">
            <ul className="main-style-list__list  ">
                <li className="main-style-list__item"><a href="#">О компании</a></li>
                <li className="main-style-list__item"><a href="#">Новости</a></li>
                <li className="main-style-list__item"><a href="#">Оптовикам</a></li>
                <li className="main-style-list__item"><a href="#">Контакты</a></li>
            </ul>
        </nav>

    );
};

export default HeaderNavigation;