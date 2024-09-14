import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import './counter.scss';
import {Size} from "../../../types/types";
import {SizesState} from "../../ProductSingle/ProductSingle";

interface ICounterProps {
    maxCount: number,
    setSizes: Dispatch<SetStateAction<SizesState>>,
    item: Size,
}

export const Counter: FC<ICounterProps> = ({maxCount, item, setSizes}) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setSizes((prev) => ({
            ...prev,
            [item.attributes.name]: {count: '' + count, name: item.id, maxCount: '' + maxCount}
        }));
    }, [count]);

    function increment() {
        setCount(Math.min(count + 1, maxCount));
    }

    function decrement() {
        setCount(Math.max(count - 1, 1));
    }

    return (
        <div className="counter">
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-number">{count}</span>
            <button className="counter-button" onClick={increment}>+</button>
        </div>

    );
};