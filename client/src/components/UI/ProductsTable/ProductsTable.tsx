import React, {FC} from "react";
import {CartItem} from "../../Cart/CartItem";
import {ICartItem} from "../../../types/types";

interface IProductsTableProps {
  items: ICartItem,
}

export const ProductsTable:FC<IProductsTableProps> = ({items, }) => {

  return (
      // <table className="cart__table">
      //     <thead>
      //     <tr className="cart__table-header">
      //         <th>Фото</th>
      //         <th className="cart__product-name">Товар</th>
      //         <th>Цена, руб.</th>
      //         <th>Кол-во по размерам</th>
      //         <th>Сумма, руб.</th>
      //         <th>&nbsp;</th>
      //     </tr>
      //     </thead>
      //     <tbody>
      //     {cart.items.map((item) => (
      //         <CartItem key={item.id} cartItem={item}/>
      //     ))}
      //     <tr className="cart__total-row">
      //         <td colSpan={4} className="cart__total-label"><b>Итого на сумму:</b></td>
      //         <td colSpan={2} className="cart__total-amount">
      //             <b>{cart.totalSum + ' ' + cart.items[0].attributes.skus[0].attributes.price.icon}</b></td>
      //     </tr>
      //
      //     </tbody>
      // </table>
  );
};