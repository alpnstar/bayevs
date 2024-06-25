import React, {FC} from 'react';

interface IBurgerProps {
    clickHandler: () => void,
}

const Burger: FC<IBurgerProps> = ({clickHandler}) => {
    return (
        <div onClick={clickHandler} className="burger">
            <span className="burger__item"></span>
            <span className="burger__item"></span><span
            className="burger__item"></span>
        </div>
    );
};

export default Burger;