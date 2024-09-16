import React, {FC} from "react";
import {useAppSelector} from "../../store/hooks";
import {OrderSingle} from "./OrderSingle";


export const OrderSingleHOC: FC = () => {
    const token = useAppSelector(state => state.userReducer.accessToken);

    return (
        token ? <OrderSingle/> : <div>
            <div className="container"><span className="notification">Вы не авторизованы</span></div>
        </div>
    );
};