import React, {FC, useState} from 'react';
import HeaderCategoriesList from "./HeaderCategoriesList";

const HeaderCategories: FC = () => {
    return (
        <div className="header__categories">
            <HeaderCategoriesList/>
            <span className="main-style-list__item  header__categories-item header__search">
                       <span className="header__categories-item-title-wrapper">
                        <a href="#">поиск</a>
                       </span>
                </span>
        </div>
    );
};

export default HeaderCategories;