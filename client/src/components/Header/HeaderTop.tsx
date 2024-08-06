import React, {FC} from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderUserActions from "./HeaderUserActions";
import Burger from "./Burger";
import SearchButton from "../Search/SearchButton";
import SearchPopup from "../Search/SearchPopup";
import {useToggler} from "../../hooks/useToggler";

interface IHeaderTop {
    burgerClickHandler: () => void,
}

const HeaderTop: FC<IHeaderTop> = ({burgerClickHandler}) => {
    const [searchVisible, searchClickHandler] = useToggler(false);


    return (
        <>
            <div className="header__top">
                <div className="header__top-wrapper container">
                    <HeaderNavigation/>
                    <HeaderUserActions/>
                    <SearchButton clickHandler={searchClickHandler}/>
                    <SearchPopup visible={searchVisible} setSearchVisibleHandler={searchClickHandler}/>
                    <Burger clickHandler={burgerClickHandler}/>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;