import './categorySingle.scss';
import React, {FC, useEffect, useState} from "react";
import Select from "../UI/Select/Select";
import ProductsList from "../Products/ProductsList";
import PageHeader from "../UI/PageHeader/PageHeader";
import {useParams} from "react-router";
import {useGetCategoriesQuery, useLazyGetCategoryProductsQuery} from "../../store/query/categoriesApi";
import {NavLink} from "react-router-dom";
import _ from "lodash";

interface ICategorySingleProps {

}
const PER_PAGE = 20;
const options = [
    {value: '', label: 'Выберите сезон'},
    {value: 'зима', label: 'Зима'},
    {value: 'весна', label: 'Весна'},
    {value: 'лето', label: 'Лето'},
    {value: 'осень', label: 'Осень'},
];
export const CategorySingle: FC<ICategorySingleProps> = () => {
    const [selectedValue, setSelectedValue] = useState<string>(options[0].value);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const params = useParams();

    const [productsTrigger, {
        data: products,
        isSuccess: productsIsSuccess,
        isFetching: productsIsLoading
    }] = useLazyGetCategoryProductsQuery();
    const {
        data: categories = {data: []},
        isSuccess: categoriesIsSuccess,
        isLoading: categoriesIsLoading
    } = useGetCategoriesQuery();


    useEffect(() => {
        params.id && productsTrigger({
            id: params.id, params: {
                'filter[season]': selectedValue,
                'pagination[per_page]': PER_PAGE,
            }
        });
    }, [params, selectedValue,currentPage]);

    return (
        <section className={'category-products'}>
            <div className="category-products__wrapper container">
                <PageHeader title={products ? products.category.attributes.name : ''}
                            breadcrumbsItems={products ? products.breadcrumbs : []}/>
                <section className='category-products__body'>
                    <div className="category-products__categories">
                        <div className="category-products__season-select">
                            <Select options={options} value={selectedValue} onChange={setSelectedValue}
                            />

                        </div>
                        <ul className="category-products__categories-list">
                            {categories.data.map(category => (
                                <li className="category-products__category">
                                    <NavLink to={'/category/' + category.id + '/products'}
                                             className={() => `category-products__categories-item  category-products__categories-item--top ${params.id === category.id ? 'category-products__categories-item--active' : ''}`}>

                                    <span
                                        className="category-products__category-title">
                                           {category.attributes.name}
                                       </span>

                                    </NavLink>
                                    <ul className="category-products__subcategories">
                                        {
                                            category.attributes.subs.map(sub => (

                                                <NavLink to={'/category/' + sub.id + '/products'}
                                                         className={() => `category-products__categories-item ${params.id === sub.id ? 'category-products__categories-item--active' : ''}`}>
                                       <span className="category-products__category-title">
                                           {sub.attributes.name}
                                       </span>
                                                </NavLink>

                                            ))
                                        }
                                    </ul>

                                </li>

                            ))}

                        </ul>
                    </div>
                    <div className="category-products__products">
                        {!productsIsLoading && products && <ProductsList products={products.data}/>}
                        <div className="category-products__pagination">
                            <ul className="category-products__pagination-list">
                                {products && products.data.length === 1 && _.times(products.meta.total, (i: number) => (
                                    <li className={`category-products__pagination-item ${products.meta.current_page === i + 1 ? 'category-products__pagination-item--active' : ''}`}>
                                        <a onClick={() => setCurrentPage(i + 1)}
                                           className={`category-products__pagination-link `}>
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </section>
    );
};