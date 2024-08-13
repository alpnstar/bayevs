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

export interface IProduct {
    id: number,
    title: string,
    price: number,
    maxQuantity: number,
}

export interface IProductsItem extends IProduct {
    img: string,
}

export interface IProductSingle extends IProduct {
    description: string,
    vendor: string,
    img: string[],
}

export type productsType = IProductsItem[];

export interface ICartItem extends Pick<IProductsItem, "id" | "img" | "title" | "price" | "maxQuantity"> {
    quantity: number,
}

export interface ICart {
    items: ICartItem[],
    totalQuantity: number,
    totalSum: number,
}
