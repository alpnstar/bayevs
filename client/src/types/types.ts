import {Dispatch, SetStateAction} from "react";

export interface ISubCategoryItem {
    title: string,
    url: string,
}

export interface ISubCategory {
    title: string,
    items: ISubCategoryItem[]
}

export interface ICategory {
    id: number,
    title: string,
    subCategories: ISubCategory[],
}

export interface ICategoriesElem {
    id: number,
    setDisplay: Dispatch<SetStateAction<boolean>>,
}

export interface IProductsItem {
    img: string,
    title: string,
}

export type productsType = IProductsItem[];