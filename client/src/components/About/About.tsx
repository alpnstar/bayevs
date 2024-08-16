import React, {FC} from "react";
import PageHeader from "../UI/PageHeader/PageHeader";
import {NavLink} from "react-router-dom";
import './about.scss';
import {ROUTES} from "../../utils/ROUTES";

export const About: FC = () => {

    return (
        <div className="about">
            <div className="about__wrapper container">
                <PageHeader title={'Контакты'} breadcrumbsItems={['LF-LABEL', 'Контакты']}/>

                <div className="about__body">
                    <div className="about__side">
                        <ul className="about__side-list">
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.aboutCompany}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>О компании</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.lookbook}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Lookbook</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.toCustomers}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Заказчикам</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.news}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Новости</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.articles}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Статьи</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.employees}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Оптовикам</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink  to={ROUTES.contacts}
                                    className={({ isActive }) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Контакты</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="about__info">
                        <h3 className="about__info-h3">Телефоны для связи:</h3>
                        <ul className="about__info-phone-list">
                            <li className="about__info-phone-list-item"><p>+7 (920) 872-70-40</p></li>
                            <li className="about__info-phone-list-item"><p>+7 (925) 888-94-83</p></li>
                        </ul>
                        <h3 className="about__info-email">E-mail: <a href="mailto:lf-label@mail.ru">lf-label@mail.ru</a></h3>
                        <h2 className="main-h2">ГДЕ МОЖНО ПРИОБРЕСТИ НАШУ ПРОДУКЦИЮ ОПТОМ?</h2>
                        <p>Москва, ТК «Южные Ворота», 19 километр МКАД, вход 16 линия П-17, пав. 86</p>

                        <h3 className="about__info-h3">Телефоны:</h3>
                        <ul className="about__info-phone-list">
                            <li className="about__info-phone-list-item"><p>+7 (925) 888-94-83</p></li>
                            <li className="about__info-phone-list-item"><p>+7 (916) 630-36-68</p></li>
                        </ul>
                        <h3 className="about__info-email">E-mail: <a href="mailto:lf-label@bk.ru">lf-label@bk.ru</a></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};