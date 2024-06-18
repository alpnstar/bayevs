import React, {FC, useState} from 'react';
import HeaderCategoriesList from "./HeaderCategoriesList";
import Popup from "../UI/Popup/Popup";

const HeaderCategories: FC = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(false);

    function clickHandler() {
        setSearchVisible(true);
    }

    return (
        <>
            <div className="header__categories">
                <HeaderCategoriesList/>
                <span className="main-style-list__item  header__categories-item header__search">
                       <span onClick={clickHandler} className="header__categories-item-title-wrapper">
                        <a >поиск</a>
                       </span>
                </span>
            </div>

            <Popup visible={searchVisible} setVisible={setSearchVisible}>
                <div className="header__search-wrapper">
                    <div className="header__search-form">
                        <input className="header__search-input" type="search" value="" maxLength={100} placeholder="введите поисковый запрос"/>
                        <input className="header__search-button" type="submit" value=""/>
                    </div>
                </div>
            </Popup>

        </>
    );
};

export default HeaderCategories;