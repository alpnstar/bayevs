import React, {FC} from "react";
import './mainButton.scss';

interface IMainButtonProps {
    onClick: (arg:any) => void;
    text: string;
    className?: string;
    isDisabled?: boolean;
}

export const MainButton: FC<IMainButtonProps> = ({isDisabled,onClick, text, className}) => {

    return (
        <button disabled={isDisabled} onClick={onClick} className={`main-button ${className ? className : ''} ${isDisabled ? 'main-button--disabled' : ''}`}>{text}</button>
    );
};