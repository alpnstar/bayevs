import React, {FC} from "react";
import HeaderCategoriesList from "./HeaderCategoriesList";
import SearchPopup from "../Search/SearchPopup";
import SearchButton from "../Search/SearchButton";
import {useToggler} from "../../hooks/useToggler";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/ROUTES";
import {useAppSelector} from "../../store/hooks";

const HeaderCategories: FC = () => {
    const [searchVisible, setSearchVisibleHandler] = useToggler(false);
    const profile = useAppSelector(state => state.userReducer.userProfile);
    const cartCount = useAppSelector(state => state.cartReducer.items.length);

    return (
        <>
            <nav className="header__categories">
                <HeaderCategoriesList/>
                <div className="header__categories-right-content">
                    <SearchButton clickHandler={setSearchVisibleHandler}/>
                    {!!profile && <NavLink to={ROUTES.cart}>
                        <div className="header__categories-item-title-wrapper">
                            <div className="header__cart-action-wrapper">
                                <span className="header__categories-item-title header__cart-icon">КОРЗИНА</span>
                                <span className="header__cart-count">{cartCount}</span>
                            </div>
                        </div>
                    </NavLink>}
                </div>
            </nav>

            <SearchPopup visible={searchVisible} setSearchVisibleHandler={setSearchVisibleHandler}/>

        </>
    );
};

export default HeaderCategories;