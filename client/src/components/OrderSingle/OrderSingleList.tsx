import React, {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {OrderSingleResponse} from "../../types/types";
import {OrderSingleItem} from "./OrderSingleItem";

interface IOrderSingleListProps {
  order: OrderSingleResponse;
}

export const OrderSingleList:FC<IOrderSingleListProps> = ({order}) => {

  return (
      <table className="cart__table">
          <thead>
          <tr className="cart__table-header">
              <th>Фото</th>
              <th className="cart__product-name">Товар</th>
              <th>Цена, руб.</th>
              <th>Кол-во по размерам</th>
              <th>Сумма, руб.</th>
          </tr>
          </thead>
          <tbody>

          {order.data.map((item) => <OrderSingleItem item = {item}/>)}
          </tbody>
          <tbody>
          <tr className="cart__total-row">
              <td colSpan={4} className="cart__total-label"><b>Итого на сумму:</b></td>
              <td colSpan={2} className="cart__total-amount">
                  <b>{order.order.attributes.total_price + order.data[0].attributes.total_price.currency.USD.symbol}</b></td>
          </tr>

          </tbody>

      </table>

  );
};