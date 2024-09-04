import './categorySingle.scss';
import React, {FC, useEffect, useState} from "react";
import Select from "../UI/Select/Select";
import ProductsList from "../Products/ProductsList";
import IMG from "../../../public/images/model.jpg";
import PageHeader from "../UI/PageHeader/PageHeader";
import {useParams} from "react-router";
import {useLazyGetProductByIdQuery} from "../../store/query/productsApi";
import {useLazyGetCategoryProductsQuery} from "../../store/query/categoriesApi";

interface ICategorySingleProps {

}
const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'},
];
export const CategorySingle: FC<ICategorySingleProps> = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const params = useParams();

    const [trigger, {data:products={data:[]}, isSuccess, isLoading}] = useLazyGetCategoryProductsQuery();


    console.log(products)
    useEffect(() => {
        params.id && trigger(params.id);
    }, [params]);
    return (
        <section className={'category-products'}>
            <div className="category-products__wrapper container">
                <PageHeader title={'Головные уборы'} breadcrumbsItems={['LF-LABEL', 'Каталог', 'Головные уборы']}/>
                <section className='category-products__body'>
                    <div className="category-products__categories">
                        <div className="category-products__season-select">
                            <Select options={options} value={selectedValue} onChange={setSelectedValue}
                                    placeholder={'ЛЮБОЙ СЕЗОН'}/>

                        </div>
                        <ul className="category-products__categories-list">
                            <li className="category-products__category">
                                <span
                                    className="category-products__categories-item category-products__categories-item--top category-products__categories-item--active
--active
--active">
                                    <span
                                        className="category-products__category-title">
                                           Мужчинам
                                       </span>

                                </span>
                                <ul className="category-products__subcategories">
                                    <li className="category-products__categories-item">
                                       <span className="category-products__category-title">
                                            Головные уборы
                                       </span>
                                        <ul className="category-products__subcategories ">
                                            <li className="category-products__categories-item">
                                                <span className="category-products__category-title">
                                            Шляпы
                                       </span>
                                            </li>

                                        </ul>
                                    </li>

                                </ul>

                            </li>
                            <li className="category-products__category">
                                <span
                                    className="category-products__categories-item category-products__categories-item--top category-products__categories-item">
                                    <span
                                        className="category-products__category-title">
                                           Мужчинам
                                       </span>

                                </span>
                                <ul className="category-products__subcategories">
                                    <li className="category-products__categories-item">
                                       <span className="category-products__category-title">
                                            Головные уборы
                                       </span>
                                        <ul className="category-products__subcategories ">
                                            <li className="category-products__categories-item">
                                                <span className="category-products__category-title">
                                            Шляпы
                                       </span>
                                            </li>

                                        </ul>
                                    </li>

                                </ul>

                            </li>
                            <li className="category-products__category">
                                <span
                                    className="category-products__categories-item category-products__categories-item--top category-products__categories-item">
                                    <span
                                        className="category-products__category-title">
                                           Мужчинам
                                       </span>

                                </span>
                                <ul className="category-products__subcategories">
                                    <li className="category-products__categories-item">
                                       <span className="category-products__category-title">
                                            Головные уборы
                                       </span>
                                        <ul className="category-products__subcategories ">
                                            <li className="category-products__categories-item">
                                                <span className="category-products__category-title">
                                            Шляпы
                                       </span>
                                            </li>

                                        </ul>
                                    </li>

                                </ul>

                            </li>
                        </ul>
                    </div>
                    <div className="category-products__products">
                        <ProductsList products={products.data}/>
                    </div>
                </section>
            </div>
        </section>
    );
};