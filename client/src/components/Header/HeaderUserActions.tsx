import React, {FC} from 'react';

const HeaderUserActions: FC = () => {
    return (
        <div className="header__user-actions">
            <ul className="main-style-list__list">
                <li className="main-style-list__item "><a href="#">Регистрация</a></li>
                <li className="main-style-list__item "><a href="#">Вход</a></li>
            </ul>
        </div>

    );
};

export default HeaderUserActions;