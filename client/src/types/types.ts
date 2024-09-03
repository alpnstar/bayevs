import {Dispatch, SetStateAction} from "react";

// Категории
export interface ISubCategoryItem {
    title: string;
    url: string;
}

export interface ISubCategory {
    title: string;
    items: ISubCategoryItem[];
}

export interface ICategory {
    id: number;
    title: string;
    subCategories: ISubCategory[];
}

export interface ICategoriesElem {
    id: number;
    setDisplay: Dispatch<SetStateAction<boolean>>;
}

// Корзина
export interface ICartItem extends Pick<Product, "id" | "attributes"> {
    quantity: number;
}

export interface ICart {
    items: ICartItem[];
    totalQuantity: number;
    totalSum: number;
    currency: string;
}

// Ответ API
// Тип для ссылок (links)
export interface Links {
    first: string;
    last: string;
}

// Тип для метаданных
export interface MetaLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

// Медиа
// Тип для атрибутов медиа
export interface MediaAttributes {
    collection_name: string;
    file_name: string;
    custom_properties: any[];
    generated_conversions: {
        list: string;
        thumb: string;
    };
    type: string;
}

// Тип для медиа
export interface Media {
    id: string;
    type: string;
    attributes: MediaAttributes;
}

// Категория
// Тип для атрибутов категории
export interface CategoryAttributes {
    uuid: string;
    name: string;
    description: string;
}

// Тип для категории
export interface Category {
    uuid: string;
    name: string;
    description: string;
}

// Бренд
// Тип для атрибутов бренда
export interface BrandAttributes {
    name: string;
}

// Тип для бренда
export interface Brand {
    id: string;
    type: string;
    attributes: BrandAttributes;
}

// Опции атрибута
// Тип для атрибутов опции атрибута
export interface AttributeOptionAttributes {
    value: string;
    label: string;
}

// Тип для опции атрибута
export interface AttributeOption {
    id: string;
    type: string;
    attributes: AttributeOptionAttributes;
}

// SKU
// Тип для атрибутов SKU
export interface SkuAttributes {
    code: string;
    price: {
        amount: number;
        currency: string;
        formatted: string;
    };
    attributeOptions: AttributeOption[];
}

// Тип для SKU
export interface Sku {
    id: string;
    type: string;
    attributes: SkuAttributes;
}

// Продукт
// Тип для атрибутов продукта
export interface ProductAttributes {
    parent_sku: string;
    name: string;
    description: string;
    status: string;
    category: Category;
    media: Media[];
    brand: Brand;
    tags: any[];
    skus: Sku[];
}

// Тип для продукта
export interface Product {
    id: string;
    type: string;
    attributes: ProductAttributes;
}


// Баннеры
export interface BannerAttributes {
    created_at: string;
    id: number;
    name: string;
    is_visible: boolean;
    link: string;
    media: Media[];
}

export interface Banner {
    id: string;
    type: string;
    attributes: BannerAttributes;
}

// Основной тип для ответа
export interface ApiResponse<T> {
    data: T;
    links: Links;
    meta: Meta;
}