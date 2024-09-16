import React, {FC} from "react";
import {useAppSelector} from "../../store/hooks";
import {Orders} from "./Orders";


export const OrdersHOC: FC = () => {
    const token = useAppSelector(state => state.userReducer.accessToken);
    return token ? <Orders/> : <div>
        <div className="container"><span className="notification">Вы не авторизованы</span></div>
    </div>
};