import React, {FC, useEffect} from "react";
import {useAppDispatch} from "../../store/hooks";
import {ICartItem} from "../../types/types";
import {useForm} from "react-hook-form";
import {cartActions} from "../../store/slices/cartSlice";
import {NavLink} from "react-router-dom";

interface ICartItemProps {
    cartItem: ICartItem;
}

export const CartItem: FC<ICartItemProps> = ({cartItem}) => {
    const dispatch = useAppDispatch();

    const sku = cartItem.attributes.skus[0];
    const {register, setValue, getValues,} = useForm({
        mode: "onBlur",
    });

    function setSizeHandler() {
        dispatch(cartActions.setProductSizes({
            id: cartItem.id,
            sizes: getValues(),
        }));

    }

    useEffect(() => {
        Object.keys(cartItem.addedSizes).forEach(key => {
            setValue(key, Math.min(+cartItem.addedSizes[key].count || 0, +cartItem.addedSizes[key].maxCount));
        })
    }, []);
    return (
        <tr className="cart__table-row">
            <td className="cart__product-image">
                <NavLink to={'/product/' + cartItem.id}>
                    <img
                        width="42"
                        height="60"
                        src={cartItem.attributes.media[0].attributes.generated_conversions.list}
                        alt="Продукт"
                    />
                </NavLink>
            </td>
            <td>
                <NavLink to={'/product/' + cartItem.id}><span
                    className="cart__product-label">{cartItem.attributes.name}</span></NavLink>
                <div>Артикул: <b>{sku.attributes.code}</b></div>
            </td>
            <td className="cart__product-price">{sku.attributes.price.formatted}</td>
            <td className="cart__product-sizes">
                <div className="cart__product-sizes-inputs">
                    {sku.attributes.sizes.map(item => {
                        const foo = cartItem.addedSizes[item.attributes.name];
                        return (
                            <label>
                                <legend>{item.attributes.name}</legend>
                                <input maxLength={4} {...register(item.attributes.name, {
                                    valueAsNumber: true,
                                    onBlur({target}: React.ChangeEvent<HTMLInputElement>) {
                                        const value = target.value;
                                        if (
                                            Object.values(getValues()).every(item => item === '' || item === '0')
                                        ) {
                                            dispatch(cartActions.removeItem(cartItem.id))
                                        }
                                    },
                                    onChange: ({target}) => {
                                        const value = target.value;
                                        if (+value > +foo.maxCount) {
                                            setValue(item.attributes.name, foo.maxCount);
                                            setSizeHandler();
                                        }
                                        setSizeHandler();
                                    }
                                })}

                                       onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                           const value = e.target.value;
                                           e.target.value = e.target.value.replace(/\D/g, ''); // Оставляем только цифры
                                       }}
                                       className="cart__size-input main-input"/>
                            </label>

                        )
                    })}
                </div>
            </td>
            <td className="cart__product-total">{cartItem.totalProductSum + ' ' + sku.attributes.price.icon} </td>
            <td className="cart__product-delete"><input onClick={() => dispatch(cartActions.removeItem(cartItem.id))}
                                                        style={{fontSize: '30px'}} type="submit" value="×"
                                                        title="Удалить из корзины"/></td>
        </tr>

    )

};