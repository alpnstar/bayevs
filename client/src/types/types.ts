import {Dispatch, SetStateAction} from "react";

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
    parent_uuid: string;
    name: string;
    description: string | null;
    products: Product[];
    category: Category,
    subs: Category[];
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
        amount_value: string;
        icon: string;
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

// Тип ответа для продуктов категории и сингла
export interface ApiResponseExtended<T> extends ApiResponse<T> {
    breadcrumbs: Breadcrumb[];
    category: Category;
}


export interface Breadcrumb {
    id?: string;
    type: string;
    attributes: BreadcrumbAttributes;
}

export interface BreadcrumbAttributes {
    name: string;
    isSelected: boolean;
    description: string | null;
    path: string;
}


// Типы для новостей

export interface NewsAttributes {
    title: string;
    content: string;
    is_visible: boolean;
    slug: string;
    created_at: string;
    updated_at: string;
    media: Media[];
}

export interface News {
    id: string;
    type: string;
    attributes: NewsAttributes;
}

export interface itemsApiParams {
    'filter[name]'?: string,
    'filter[season]'?: string,
    'pagination[per_page]'?: number,
    'page[number]'?: number,

}