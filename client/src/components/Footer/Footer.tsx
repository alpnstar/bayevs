import React from "react";
import "./footer.scss";
import {NavLink} from "react-router-dom";
import {SITE_NAME} from "../../utils/CONSTS";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__top">
                    <nav className="footer__links">
                        <ul className="footer__links-list">
                            <li className="footer__links-item"><a href="#">{SITE_NAME}</a></li>
                            <li className="footer__links-item"><NavLink to={"/about-company"}>О компании</NavLink></li>
                            <li className="footer__links-item"><NavLink to={"/to-customers"}>Заказчикам</NavLink></li>
                            <li className="footer__links-item"><NavLink to={"/news"}>Новости</NavLink></li>
                            <li className="footer__links-item"><NavLink to={"/wholesalers"}>Оптовикам</NavLink></li>
                            <li className="footer__links-item"><NavLink to={"/contacts"}>Контакты</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__bottom">
                    © 2009-2024 &nbsp;|&nbsp; <a href="/">{SITE_NAME}.ru</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;