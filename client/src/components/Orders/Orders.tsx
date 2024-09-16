import React, {FC, useEffect, useState} from "react";
import {useGetOrdersQuery} from "../../store/query/ordersApi";
import './orders.scss';
import {Loader} from "../UI/Loader/Loader";
import {Pagination} from "../UI/Pagination/Pagination";
import {Link} from "react-router-dom";

export const Orders: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data: orders, isFetching, refetch} = useGetOrdersQuery({params: {'page[number]': currentPage}});
    return (
        <div className="orders">
            <div className="orders__wrapper container">
                <h1 className="main-h1">Заказы</h1>
                {isFetching ? <Loader marginTop={'100px'}/> : orders && <div className="orders__table">
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
                        {orders && <>
                        {orders.data.map((order) => (
                            <tr key={order.id}>
                                <td className="orders__order-label-id"><Link to={`/orders/${order.id}/items`}>{order.attributes.number}</Link></td>
                                <td>{order.attributes.date}</td>
                                {/*<td className="orders__order-amount">{order.data.attributes.}</td>*/}
                                <td>{order.attributes.total_price}</td>
                                <td>{order.attributes.status}</td>
                            </tr>
                        ))}
                            <Pagination items={orders.data} meta={orders.meta} setPage={setCurrentPage}/>
                        </>}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        </div>
    );
};