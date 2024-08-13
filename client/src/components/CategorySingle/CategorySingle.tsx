import './categorySingle.scss';
import React, {FC, useState} from "react";
import Select from "../UI/Select/Select";
import ProductsList from "../Products/ProductsList";
import IMG from "../../../public/images/model.jpg";
import {Breadcrumbs} from "../UI/Breadcrumbs/Breadcrumbs";

interface ICategorySingleProps {

}

export const CategorySingle: FC<ICategorySingleProps> = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
    ];
    return (
        <section className={'category-products'}>
            <div className="category-products__wrapper container">
                <section className="category-products__header">
                    <Breadcrumbs items={['']}/>
                    <span className="category-products__title">
                       <h1 className="main-h1">Головные уборы</h1>
                    </span>
                </section>
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
                        <ProductsList products={[{
                            img: IMG,
                            title: "Панама LF-Label Tiger, хлопок, цвет чёрный 899901"
                        }, {
                            img: IMG,
                            title: "Панама LF-Label Tiger, хлопок, цвет чёрный 899901"
                        }, {
                            img: IMG,
                            title: "Панама LF-Label Tiger, хлопок, цвет чёрный 899901"
                        },]}/>
                    </div>
                </section>
            </div>
        </section>
    );
};