import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import HeaderCategoriesItem from "./HeaderCategoriesItem";
import {ICategoriesElem, ICategory} from "../../types/types";

const HeaderCategoriesList: FC = () => {

    const [categoriesElems, setCategoriesElems] = useState<ICategoriesElem[]>([]);
    const [categoriesData, setCategoriesData] = useState<ICategory[]>(
        [{
            id:1,
            title: 'Мужчинам',
            subCategories: [
                {
                    title: 'Головные уборы',
                    items: [{
                        title: 'Панамы',
                        url: '#',
                    }]
                },
                {
                    title: 'Аксессуары',
                    items: [{
                        title: 'Очки',
                        url: '#',
                    }]
                }
            ]
        }, {
            id:2,
            title: 'Женщинам',
            subCategories: [
                {
                    title: 'Головные уборы',
                    items: [{
                        title: 'lorem',
                        url: '#',
                    }]
                }
            ]
        }]
    );
    return (
        <>
            <ul className="main-style-list__list header__categories-list">
                {categoriesData.map((item, index) => <HeaderCategoriesItem key={index} category={item}
                 categoriesElems={categoriesElems} setCategoriesElems={setCategoriesElems}/>)}

                <li className="main-style-list__item header__categories-item">
                    <div className="header__categories-item-title-wrapper">
                        <div className="header__categories-item-title"><a href="#">Lookbook</a></div>
                    </div>
                </li>
                <li className="main-style-list__item header__categories-item">
                    <div className="header__categories-item-title-wrapper">
                        <div className="header__categories-item-title"><a href="#">Заказчикам</a></div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default HeaderCategoriesList;