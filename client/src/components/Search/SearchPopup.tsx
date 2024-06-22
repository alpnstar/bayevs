import React, {Dispatch, FC} from 'react';
import Popup from "../UI/Popup/Popup";
import Search from "./Search";

interface ISearchPopup {
    visible: boolean,
    setVisible: Dispatch<React.SetStateAction<boolean>>
}

const SearchPopup: FC<ISearchPopup> = ({visible, setVisible}) => {
    return (
        <Popup visible={visible} setVisible={setVisible}>
            <Search/>
        </Popup>
    );
};

export default SearchPopup;