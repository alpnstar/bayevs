import React, {FC} from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import "./header.scss";
import BurgerMenu from "./BurgerMenu";
import {useToggler} from "../../hooks/useToggler";
import SearchPopup from "../Search/SearchPopup";

export const Header: FC = () => {
    const [burgerVisible, burgerClickHandler] = useToggler(false);
    const [searchVisible, searchClickHandler] = useToggler(false);

    return (
        <>
            <BurgerMenu burgerVisible={burgerVisible} burgerClickHandler={burgerClickHandler}/>
            <header className="header">
                <div className="header__wrapper">
                    <HeaderTop searchClickHandler={searchClickHandler} burgerClickHandler={burgerClickHandler}/>
                </div>
            </header>
            <SearchPopup visible={searchVisible} setSearchVisibleHandler={searchClickHandler}/>
            <HeaderMiddle/>
            <HeaderBottom/>
        </>
    );
};
