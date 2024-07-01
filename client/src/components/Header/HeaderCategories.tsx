import React, {FC, useState} from "react";
import HeaderCategoriesList from "./HeaderCategoriesList";
import Popup from "../UI/Popup/Popup";
import Search from "../Search/Search";
import SearchPopup from "../Search/SearchPopup";
import SearchButton from "../Search/SearchButton";

const HeaderCategories: FC = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(false);

    function clickHandler() {
        setSearchVisible(true);
    }

    return (
        <>
            <div className="header__categories">
                <HeaderCategoriesList/>
                <SearchButton clickHandler={clickHandler}/>
            </div>

            <SearchPopup visible={searchVisible} setVisible={setSearchVisible}/>

        </>
    );
};

export default HeaderCategories;