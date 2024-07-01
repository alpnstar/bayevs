import React, {FC, useEffect, useState} from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderUserActions from "./HeaderUserActions";
import Burger from "./Burger";
import Search from "../Search/Search";
import Popup from "../UI/Popup/Popup";
import SearchButton from "../Search/SearchButton";
import SearchPopup from "../Search/SearchPopup";
import BurgerMenu from "./BurgerMenu";

const HeaderTop: FC = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(false);
    const [burgerVisible, setBurgerVisible] = useState<boolean>(false);

    function searchClickHandler() {
        setSearchVisible(!searchVisible);
    }

    function burgerClickHandler() {
        setBurgerVisible(!burgerVisible);
    }

    return (
        <div className="header__top">
            <div className="header__top-wrapper container">
                <HeaderNavigation/>
                <HeaderUserActions/>
                <SearchButton clickHandler={searchClickHandler}/>
                <SearchPopup visible={searchVisible} setVisible={setSearchVisible}/>
                <Burger clickHandler={burgerClickHandler}/>
                <BurgerMenu burgerVisible={burgerVisible} setBurgerVisible={setBurgerVisible}/>
            </div>
        </div>
    );
};

export default HeaderTop;