import React, {FC, useEffect, useState} from "react";
import {Category, ICategoriesElem} from "../../types/types";
import {useGetCategoriesQuery} from "../../store/query/categoriesApi";
import HeaderCategoriesItem from "./HeaderCategoriesItem";
import {NavLink} from "react-router-dom";

export interface ISubCategoryDataItem {
    title: string;
    url: string;
}

// Тип для подкатегории
export interface ISubCategoryData {
    title: string;
    items: ISubCategoryDataItem[];
}

// Тип для категории
export interface ICategoryData {
    id: number;
    title: string;
    subCategories: Category[];
}

const HeaderCategoriesList: FC = () => {

    const [categoriesElems, setCategoriesElems] = useState<ICategoriesElem[]>([]);
    const {data: categories = {data: []}} = useGetCategoriesQuery();
    const [categoriesData, setCategoriesData] = useState<ICategoryData[]>(
        []
    );
    useEffect(() => {
        categories.data.length && setCategoriesData([
            {
                id: 1,
                title: "Каталог",
                subCategories: categories.data,
            },

        ]);
    }, [categories]);
    return (
        <>
            <ul className="main-style-list__list header__categories-list">
                {categoriesData.map((item, index) => <HeaderCategoriesItem key={index} category={item}
                                                                           categoriesElems={categoriesElems}
                                                                           setCategoriesElems={setCategoriesElems}/>)}

                <li className="main-style-list__item header__categories-item">
                    <div className="header__categories-item-title-wrapper">
                        <div className="header__categories-item-title"><NavLink to={'/to-customers'}>Заказчикам</NavLink></div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default HeaderCategoriesList;