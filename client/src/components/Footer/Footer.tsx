import React from "react";
import "./footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__top">
                    <nav className="footer__links">
                        <ul className="footer__links-list">
                            <li className="footer__links-item"><a href="#">LF-LABEL</a></li>
                            <li className="footer__links-item"><a href="#">О компании</a></li>
                            <li className="footer__links-item"><a href="#">Каталог</a></li>
                            <li className="footer__links-item"><a href="#">Lookbook</a></li>
                            <li className="footer__links-item"><a href="#">Заказчикам</a></li>
                            <li className="footer__links-item"><a href="#">Новости</a></li>
                            <li className="footer__links-item"><a href="#">Статьи</a></li>
                            <li className="footer__links-item"><a href="#">Оптовикам</a></li>
                            <li className="footer__links-item"><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__bottom">
                    © 2009-2024 &nbsp;|&nbsp; <a href="/">LF-Label.ru</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;