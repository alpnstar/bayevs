import React, {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {OrderItem, OrderSingle} from "../../types/types";

interface Props {
    item :OrderSingle,
}

export const OrderSingleItem: FC<Props> = ({item}) => {


    const sku = item.attributes.sku;
    const {register, setValue, handleSubmit, getValues, watch} = useForm({
        mode: "onBlur",
    });


    useEffect(() => {
        Object.keys(item.attributes.sizes).forEach(key => {
            setValue(key, item.attributes.sizes[key]);
        })
    }, []);
    return (
        <tr className="cart__table-row">
            <td className="cart__product-image">
                <NavLink to={'/product/' + item.attributes.product.id}>
                    <img
                        width="42"
                        height="60"
                        src={item.attributes.product.attributes.media[0].attributes.generated_conversions.list}
                        alt="Продукт"
                    />
                </NavLink>
            </td>
            <td>
                <NavLink to={'/product/' + item.attributes.product.id}><span
                    className="cart__product-label">{item.attributes.product.attributes.name}</span></NavLink>
                <div>Артикул: <b>{sku.attributes.code}</b></div>
            </td>
            <td className="cart__product-price">{sku.attributes.price.formatted}</td>
            <td className="cart__product-sizes">
                <div className="cart__product-sizes-inputs">
                    {Object.keys(item.attributes.sizes).map(key => {
                        return (
                            <label>
                                <legend>{key}</legend>
                                <input maxLength={4} {...register(key, {
                                    disabled: true,
                                })}

                                       className="cart__size-input main-input"/>
                            </label>

                        )
                    })}
                </div>
            </td>
            <td className="cart__product-total">{item.attributes.price.value + item.attributes.price.currency.USD.symbol} </td>
        </tr>

    )


};