import React, {FC} from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderUserActions from "./HeaderUserActions";
import Burger from "./Burger";
import SearchButton from "../Search/SearchButton";
import SearchPopup from "../Search/SearchPopup";
import BurgerMenu from "./BurgerMenu";
import {useToggler} from "../../hooks/useToggler";

const HeaderTop: FC = () => {
    const [searchVisible, searchClickHandler] = useToggler(false);
    const [burgerVisible, burgerClickHandler] = useToggler(false);

    return (
        <div className="header__top">
            <div className="header__top-wrapper container">
                <HeaderNavigation/>
                <HeaderUserActions/>
                <SearchButton clickHandler={searchClickHandler}/>
                <SearchPopup visible={searchVisible} setSearchVisibleHandler={searchClickHandler}/>
                <Burger clickHandler={burgerClickHandler}/>
                <BurgerMenu burgerVisible={burgerVisible} burgerClickHandler={burgerClickHandler}/>
            </div>
        </div>
    );
};

export default HeaderTop;