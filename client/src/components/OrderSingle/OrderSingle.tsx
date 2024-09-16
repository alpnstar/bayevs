import React, {FC} from "react";
import {useGetOrderByIdQuery} from "../../store/query/ordersApi";
import {useParams} from "react-router";
import {OrderSingleList} from "./OrderSingleList";
import './orderSingle.scss';
import {Loader} from "../UI/Loader/Loader";

export const OrderSingle: FC = () => {
    const params = useParams();
    const {data: order, isFetching,  refetch} = useGetOrderByIdQuery(params.id || '');
    console.log(order)
    return (
        <div className="order-single">
            <div className="order-single__wrapper container">
                {isFetching ? <Loader marginTop={'100px'}/> : order && <>
                    <div className="order-single__header">
                        <h1 className="main-h1">ЗАКАЗ №{order.order.attributes.number}</h1>
                        <div className="order-single__header-details">

                            <div className="order-single__header-property">
                                <span className="order-single__header-property-label">Дата создания: </span>
                                <span
                                    className="order-single__header-property-value">{order.order.attributes.date}</span>
                            </div>
                            <div className="order-single__header-property">
                                <span className="order-single__header-property-label">Статус: </span>
                                <span
                                    className="order-single__header-property-value">{order.order.attributes.status}</span>
                            </div>
                        </div>
                    </div>

                    <OrderSingleList order={order}/>
                </>}
            </div>
        </div>
    );
};