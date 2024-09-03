import React, {FC} from "react";
import './mainButton.scss';

interface IMainButtonProps {
    onClick: (arg:any) => void;
    text: string;
    className?: string;
}

export const MainButton: FC<IMainButtonProps> = ({onClick, text, className}) => {

    return (
        <button onClick={onClick} className={`main-button ${className ? className : ''}`}>{text}</button>
    );
};