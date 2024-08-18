import React, {Dispatch, FC, SetStateAction} from "react";
import {togglerHandlerType} from "../../../hooks/useToggler";

interface ICloseButtonProps {
    setState: Dispatch<SetStateAction<boolean>> | togglerHandlerType,
}

const CloseButton: FC<ICloseButtonProps> = ({setState}) => {
    function clickHandler() {
        setState(false);
    }

    return (
        <div onClick={clickHandler} className="close-button"/>
    );
};

export default CloseButton;