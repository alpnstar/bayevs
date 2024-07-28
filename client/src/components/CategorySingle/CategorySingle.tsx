import './categorySingle.scss';
import React, {FC} from "react";

interface ICategorySingleProps {

}

export const CategorySingle: FC<ICategorySingleProps> = () => {
    return (
        <section className={'category-products'}>
            <div className="category-products__wrapper container">
                <section className="category-products__header">
                    <div className="category-products__breadcrumbs">
                        <span className="category-products__breadcrumbs-item">
                            LF-LABEL
                        </span>
                        <span className="category-products__breadcrumbs-item">
                            Головные уборы
                        </span>
                        <span className="category-products__breadcrumbs-item">
                            Мужчинам
                        </span>
                    </div>
                    <span className="category-products__title">
                       <h1 className="main-h1">Головные уборы</h1>
                    </span>
                </section>
                <section className='category-products__body'>
                    <div className="category-products__categories">
                        <ul className="category-products__categories-list">
                            <li className="category-products__category">
                                <span
                                    className="category-products__categories-item category-products__categories-item--top category-products__categories-item--active">
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
                                            Шляпа
                                       </span>
                                            </li>
                                            <li className="category-products__categories-item">
                                                <span className="category-products__category-title">
                                            Шняга
                                       </span>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                            </li>
                        </ul>
                    </div>
                    <div className="category-products__products">

                    </div>
                </section>
            </div>
        </section>
    );
};