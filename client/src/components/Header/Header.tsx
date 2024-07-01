import {FC} from "react";

import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import "./header.scss";

export const Header: FC = () => {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <HeaderTop/>
                </div>
            </header>
            <HeaderMiddle/>
            <HeaderBottom/>
        </>
    );
};
