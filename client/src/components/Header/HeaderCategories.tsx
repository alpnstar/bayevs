import React, {FC} from "react";
import HeaderCategoriesList from "./HeaderCategoriesList";
import SearchPopup from "../Search/SearchPopup";
import SearchButton from "../Search/SearchButton";
import {useToggler} from "../../hooks/useToggler";

const HeaderCategories: FC = () => {
    const [searchVisible, setSearchVisibleHandler] = useToggler(false);


    return (
        <>
            <nav className="header__categories">
                <HeaderCategoriesList/>
                <SearchButton clickHandler={setSearchVisibleHandler}/>
            </nav>

            <SearchPopup visible={searchVisible} setSearchVisibleHandler={setSearchVisibleHandler}/>

        </>
    );
};

export default HeaderCategories;