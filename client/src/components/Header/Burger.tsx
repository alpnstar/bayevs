import React, {FC} from "react";
import {togglerHandlerType} from "../../hooks/useToggler";

interface IBurgerProps {
    clickHandler: togglerHandlerType,
}

const Burger: FC<IBurgerProps> = ({clickHandler}) => {
    return (
        <div onClick={() => clickHandler()} className="burger">
            <span className="burger__item"/>
            <span className="burger__item"/>
            <span className="burger__item"/>
        </div>
    );
};

export default Burger;