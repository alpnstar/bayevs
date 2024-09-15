import React, {FC} from "react";
import {useGetOrdersQuery} from "../../store/query/ordersApi";
import './orders.scss';

export const Orders: FC = () => {
const {data: orders, isFetching} = useGetOrdersQuery({});
    return (
        <div className="orders">
            <div className="orders__wrapper container">
                <h1 className="main-h1">Заказы</h1>
                <div className="orders__table">
                    <table className="orders__table">
                        <thead>
                        <tr className="orders__table-header">
                            <th className="orders__table-number">Номер заказа</th>
                            <th className="orders__table-date">Дата</th>
                            <th className="orders__table-sum">Сумма</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders && orders.data.map((order) => (
                            <tr key={order.id}>
                                <td >{order.attributes.number}</td>
                                <td >{order.attributes.date}</td>
                                {/*<td className="orders__order-amount">{order.data.attributes.}</td>*/}
                                <td >{order.attributes.total_price}</td>
                                <td >{order.attributes.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};