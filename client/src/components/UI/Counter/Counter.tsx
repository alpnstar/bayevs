import React, {Dispatch, FC, SetStateAction, useEffect} from "react";
import './counter.scss';
import {Size} from "../../../types/types";
import {SizesState} from "../../ProductSingle/ProductSingle";

interface ICounterProps {
    maxCount: number,
    setSizes: Dispatch<SetStateAction<SizesState>>,
    sizes: SizesState,
    item: Size,
}

export const Counter: FC<ICounterProps> = ({maxCount, item, sizes, setSizes}) => {
    useEffect(() => {
        setSizes(prev => {
            return {
                ...prev,
                [item.attributes.name]: {
                    ...prev[item.attributes.name],
                    count: 0,
                    name: item.id,
                    maxCount: item.attributes.stock,

                }
            }
        })
    }, []);

    function increment() {
        setSizes(prev => {
            return {
                ...prev,
                [item.attributes.name]: {
                    ...prev[item.attributes.name],
                    count: Math.min(+prev[item.attributes.name].count + 1, +maxCount)
                }
            }
        })
    }

    function decrement() {
        setSizes(prev => {
            return {
                ...prev,
                [item.attributes.name]: {
                    ...prev[item.attributes.name],
                    count: Math.max(+prev[item.attributes.name].count - 1, 0)
                }
            }
        })
    }

    return (
        <div className="counter">
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-number">{sizes[item.attributes.name] && sizes[item.attributes.name].count}</span>
            <button className="counter-button" onClick={increment}>+</button>
        </div>

    );
};