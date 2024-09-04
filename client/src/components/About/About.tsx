import React, {FC} from "react";
import PageHeader from "../UI/PageHeader/PageHeader";
import {NavLink} from "react-router-dom";
import './about.scss';
import {ROUTES} from "../../utils/ROUTES";

interface IAboutProps {
    title: string,
    children: React.ReactNode;
}

export const About: FC<IAboutProps> = ({title, children}) => {

    return (
        <div className="about">
            <div className="about__wrapper container">
                <PageHeader title={title} breadcrumbsItems={[{
                    type: 'category',
                    attributes: {name: 'LF-LABEL', isSelected: false, description: '', path: ''}
                }]}/>

                <div className="about__body">
                    <div className="about__side">
                        <ul className="about__side-list">
                            <li className="about__side-item">
                                <NavLink to={ROUTES.aboutCompany}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>О
                                    компании</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink to={ROUTES.lookbook}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Lookbook</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink to={ROUTES.toCustomers}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Заказчикам</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink to={ROUTES.news}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Новости</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink to={ROUTES.articles}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Статьи</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink to={ROUTES.toWholesalers}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Оптовикам</NavLink>
                            </li>
                            <li className="about__side-item">
                                <NavLink to={ROUTES.contacts}
                                         className={({isActive}) => isActive ? "about__side-item-link--active" : "about__side-item-link"}>Контакты</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="about__info">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};