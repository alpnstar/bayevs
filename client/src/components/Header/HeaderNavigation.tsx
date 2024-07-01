import React, {FC, useEffect, useState} from "react";

const HeaderNavigation: FC = () => {
    const [displayLogo, setDisplayLogo] = useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = document.body.scrollTop;
            if (scrollTop) {
                setDisplayLogo(true);
            } else {
                setDisplayLogo(false);
            }
        }

        document.body.addEventListener("scroll", handleScroll);
        return () => {
            document.body.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className="header__navigation">
            <a href="/" className={`logo ${!displayLogo ? "--logo-hidden" : ""}`}>LF LABEL</a>
            <ul className="main-style-list__list  ">
                <li className="main-style-list__item"><a href="#">О компании</a></li>
                <li className="main-style-list__item"><a href="#">Новости</a></li>
                <li className="main-style-list__item"><a href="#">Оптовикам</a></li>
                <li className="main-style-list__item"><a href="#">Контакты</a></li>
            </ul>
        </nav>

    )
        ;
};

export default HeaderNavigation;