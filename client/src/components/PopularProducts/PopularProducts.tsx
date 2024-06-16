import React, {FC} from 'react';
import IMG from '../../../public/images/model.jpg';

const PopularProducts: FC = () => {
    return (
        <section className="popular-products">
            <div className="popular-products-wrapper container">
                <h2 className="main-h2">
                    Новинки головных уборов LF-LABEL
                </h2>
                <ul className="popular-products__list">
                    <li className="popular-products__item">
                        <div className="popular-products__item-img"><img src={IMG} alt=""/></div>
                        <button className="popular-products__item-fast-view">
                            Быстрый просмотр
                        </button>
                        <span className="popular-products__item-title">Кепка реглан, ткань лён, цвет белый 133-5</span>
                    </li>
                    <li className="popular-products__item">
                        <div className="popular-products__item-img"><img src={IMG} alt=""/></div>
                        <span className="popular-products__item-title"> Кепка реглан, ткань лён, цвет белый 133-5</span>
                    </li>
                    <li className="popular-products__item">
                        <div className="popular-products__item-img"><img src={IMG} alt=""/></div>
                        <span className="popular-products__item-title">Кепка реглан, ткань лён, цвет белый 133-5</span>
                    </li>
                    <li className="popular-products__item">
                        <div className="popular-products__item-img"><img src={IMG} alt=""/></div>
                        <span className="popular-products__item-title">Кепка реглан, ткань лён, цвет белый 133-5</span>
                    </li>
                    <li className="popular-products__item">
                        <div className="popular-products__item-img"><img src={IMG} alt=""/></div>
                        <span className="popular-products__item-title">Кепка реглан, ткань лён, цвет белый 133-5</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default PopularProducts;