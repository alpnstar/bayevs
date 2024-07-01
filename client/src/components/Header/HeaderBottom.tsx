import React, {FC} from "react";
import searchIMG from "../../../public/images/search.png";
import HeaderCategories from "./HeaderCategories";

const HeaderBottom: FC = () => {
    return (
        <div className="header__bottom">
            <div className="header__bottom-wrapper container">
                <HeaderCategories/>
            </div>
        </div>
    );
};

export default HeaderBottom;