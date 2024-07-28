import React, {FC} from "react";
import Popup from "../UI/Popup/Popup";
import Search from "./Search";
import {togglerHandlerType} from "../../hooks/useToggler";

interface ISearchPopup {
    visible: boolean,
    setSearchVisibleHandler: togglerHandlerType,
}

const SearchPopup: FC<ISearchPopup> = ({visible, setSearchVisibleHandler}) => {
    return (
        <Popup visible={visible} setVisibleHandler={setSearchVisibleHandler}>
            <Search/>
        </Popup>
    );
};

export default SearchPopup;