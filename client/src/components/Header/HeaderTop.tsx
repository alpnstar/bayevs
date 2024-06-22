import React, {FC, useEffect, useState} from 'react';
import HeaderNavigation from "./HeaderNavigation";
import HeaderUserActions from "./HeaderUserActions";
import Burger from "./Burger";
import Search from "../Search/Search";
import Popup from "../UI/Popup/Popup";
import SearchButton from "../Search/SearchButton";
import SearchPopup from "../Search/SearchPopup";

const HeaderTop: FC = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(false);

    function searchClickHandler() {
        setSearchVisible(!searchVisible);
    }

    return (
        <div className="header__top">
            <div className="header__top-wrapper container">
                <HeaderNavigation/>
                <HeaderUserActions/>
                <SearchButton clickHandler={searchClickHandler}/>
                <SearchPopup visible={searchVisible} setVisible={setSearchVisible}/>
                <Burger/>
            </div>
        </div>
    );
};

export default HeaderTop;