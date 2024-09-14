import {Dispatch, SetStateAction} from "react";
import {SizesState} from "../components/ProductSingle/ProductSingle";

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
    sizes: Size[];
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

export interface Size extends BaseAttributes {
    attributes: {
        name: string,
        stock: number,
    }
}

export interface Product extends BaseAttributes {
    attributes: ProductAttributes;
}

// Корзина
export interface ICartItem extends Pick<Product, "id" | "attributes"> {
    addedSizes: SizesState,
    totalProductSum?: number,
}

export interface ICart {
    items: ICartItem[];
    totalSum: number;
    orderData: IOrderData,
}
export interface IOrderData {
    products: {
        sku_uuid: string;
        sku_code: string;
        sizes: {
            size_uuid: string;
            quantity: string;
        }[];
        product_name: string;
    }[];
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

export interface ApiResponseCutted<T> {
    data: T,
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

export interface ItemsApiParams {
    'filter[name]'?: string,
    'filter[season]'?: string,
    'pagination[per_page]'?: number,
    'page[number]'?: number,
}

export interface UserData extends BaseAttributes {
    attributes: UserAttributes
}

export interface UserAttributes {
    uuid: string,
    email: string,
    first_name: string,
    last_name: string,
    mobile: string,
    status: string,
    city: string,
    company: string
}


export interface SignUpData extends BaseAttributes {
    attributes: SignUpAttributes
}

export interface SignUpAttributes {
    email: string,
    password: string,
    password_confirmation: string,
    first_name: string,
    last_name: string,
    mobile: string,
    company: string,
    city: string
}

export interface SignIn {

}