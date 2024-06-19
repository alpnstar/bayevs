import React, {FC, useEffect, useState} from 'react';
import HeaderNavigation from "./HeaderNavigation";
import HeaderUserActions from "./HeaderUserActions";

const HeaderTop: FC = () => {

    return (
        <div className="header__top">
            <div className="header__top-wrapper container">
                <HeaderNavigation/>
                <HeaderUserActions/>
            </div>
        </div>
    );
};

export default HeaderTop;