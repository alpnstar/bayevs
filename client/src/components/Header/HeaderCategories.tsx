import React, {FC} from 'react';

const HeaderCategories:FC = () => {
    const categoriesList:number[] = [1,2,5];
    return (
        <div className="header__categories">
            <ul className="main-style-list__list header__categories-list">
                <li className="main-style-list__item header__categories-item header__categories-item--expand header__categories-item--expand">
                    <a href="#">Мужчинам</a></li>
                <li className="main-style-list__item header__categories-item header__categories-item--expand"><a
                    href="#">Женщинам</a></li>
                <li className="main-style-list__item header__categories-item"><a href="#">Lookbook</a></li>
                <li className="main-style-list__item header__categories-item"><a href="#">Заказчикам</a></li>
            </ul>
            <span className="main-style-list__item  header__categories-item header__search">
                        <a href="#">поиск</a>
                </span>
        </div>
    );
};

export default HeaderCategories;