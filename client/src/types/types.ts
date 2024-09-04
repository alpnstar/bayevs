import { Dispatch, SetStateAction } from "react";

// Общее
export interface BaseAttributes {
    id: string;
    type: string;
}

// Ссылки (Links)
export interface Links {
    first: string;
    last: string;
}

// Метаданные (Meta)
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

export interface Media extends BaseAttributes {
    attributes: MediaAttributes;
}

// Категория
export interface CategoryAttributes {
    uuid: string;
    name: string;
    description: string | null;
    products?: Product[];
}

export interface Category extends BaseAttributes {
    attributes: CategoryAttributes;
}



export interface ICategoriesElem {
    id: number;
    setDisplay: Dispatch<SetStateAction<boolean>>;
}

// Бренд
export interface BrandAttributes {
    name: string;
}

export interface Brand extends BaseAttributes {
    attributes: BrandAttributes;
}

// Опции атрибута
export interface AttributeOptionAttributes {
    value: string;
    label: string;
}

export interface AttributeOption extends BaseAttributes {
    attributes: AttributeOptionAttributes;
}

// SKU
export interface SkuAttributes {
    code: string;
    price: {
        amount: number;
        currency: string;
        formatted: string;
    };
    attributeOptions: AttributeOption[];
}

export interface Sku extends BaseAttributes {
    attributes: SkuAttributes;
}

// Продукт
export interface ProductAttributes {
    parent_sku: string;
    name: string;
    description: string | null;
    status: string;
    category: Category;
    media: Media[];
    brand: Brand;
    tags: any[];
    skus: Sku[];
}

export interface Product extends BaseAttributes {
    attributes: ProductAttributes;
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

// Баннеры
export interface BannerAttributes {
    created_at: string;
    id: number;
    name: string;
    is_visible: boolean;
    link: string;
    media: Media[];
}

export interface Banner extends BaseAttributes {
    attributes: BannerAttributes;
}

// Основной тип для ответа
export interface ApiResponse<T> {
    data: T;
    links: Links;
    meta: Meta;
}