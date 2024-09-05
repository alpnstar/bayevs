import React, {FC} from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderUserActions from "./HeaderUserActions";
import Burger from "./Burger";
import SearchButton from "../Search/SearchButton";
import SearchPopup from "../Search/SearchPopup";
import {useToggler} from "../../hooks/useToggler";

interface IHeaderTop {
    burgerClickHandler: () => void,
    searchClickHandler:()=> void,
}

const HeaderTop: FC<IHeaderTop> = ({searchClickHandler,burgerClickHandler}) => {
    return (
        <>
            <div className="header__top">
                <div className="header__top-wrapper container">
                    <HeaderNavigation/>
                    <HeaderUserActions/>
                    <SearchButton clickHandler={searchClickHandler}/>
                    <Burger clickHandler={burgerClickHandler}/>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;