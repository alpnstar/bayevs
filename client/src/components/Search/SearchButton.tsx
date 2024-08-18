import React, {FC} from "react";
import {togglerHandlerType} from "../../hooks/useToggler";

interface ISearchButton {
    clickHandler: togglerHandlerType,
}

const SearchButton: FC<ISearchButton> = ({clickHandler}) => {
    return (
        <span className="main-style-list__item  header__categories-item search__button">
                       <span onClick={() => clickHandler()} className="header__categories-item-title-wrapper">
                        <a>поиск</a>
                       </span>
                </span>

    );
};

export default SearchButton;