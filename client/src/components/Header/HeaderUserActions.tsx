import React, {FC} from "react";
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/ROUTES";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {userActions} from "../../store/slices/userSlice";

const HeaderUserActions: FC = () => {
    const user = useAppSelector(state => state.userReducer.userProfile);
    const dispatch = useAppDispatch();
    function exitHandler() {
        dispatch(userActions.logoutUser());
    }
    return (
        <div className="header__user-actions">
            <ul className="main-style-list__list">
                {!user ? (
                        <>
                            <li className="main-style-list__item "><NavLink to={ROUTES.registration}>Регистрация</NavLink>
                            </li>
                            <li className="main-style-list__item "><NavLink to={ROUTES.authorization}>Вход</NavLink></li>
                        </>
                    )
                    : (
                        <>
                            <li className="main-style-list__item "><span className=""><b>{user ? user.first_name : ''}</b></span></li>
                            <li className="main-style-list__item "><span onClick={exitHandler}>Выход</span></li>
                           <Link to={ROUTES.orders}>
                                <li className="main-style-list__item ">Заказы</li>
                            </Link>

                        </>
                    )}

            </ul>
        </div>

    );
};

export default HeaderUserActions;