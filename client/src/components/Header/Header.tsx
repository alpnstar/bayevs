import React, {FC} from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import "./header.scss";
import BurgerMenu from "./BurgerMenu";
import {useToggler} from "../../hooks/useToggler";

export const Header: FC = () => {
    const [burgerVisible, burgerClickHandler] = useToggler(false);
    return (
        <>
            <BurgerMenu burgerVisible={burgerVisible} burgerClickHandler={burgerClickHandler}/>
            <header className="header">
                <div className="header__wrapper">
                    <HeaderTop burgerClickHandler={burgerClickHandler}/>
                </div>
            </header>
            <HeaderMiddle/>
            <HeaderBottom/>
        </>
    );
};
