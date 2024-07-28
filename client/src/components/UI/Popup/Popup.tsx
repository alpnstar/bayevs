import React, {FC, ReactNode, useEffect} from "react";
import "./popup.scss";
import {togglerHandlerType} from "../../../hooks/useToggler";

interface IPopupProps {
    children: ReactNode,
    visible: boolean,
    setVisibleHandler: togglerHandlerType,
}


const Popup: FC<IPopupProps> = ({children, visible, setVisibleHandler}) => {
    function clickHandler(event: React.MouseEvent) {
        const target = event.target as HTMLDivElement;
        const targetClassList = Array.from(target.classList);
        if (targetClassList.indexOf("popup") !== -1 || Array.from(target.classList).indexOf('popup__wrapper') !== -1) {
            setVisibleHandler(false);
        }
    }

    useEffect(() => {
        const bodyElem = (document.querySelector("#body") as HTMLBodyElement);
        if (visible) return bodyElem.classList.add("--hidden");
        bodyElem.classList.remove("--hidden");

    }, [visible]);
    return (
        <div onClick={clickHandler} className={`popup ${visible ? "popup--visible" : ""}`}>
            <div className="popup__wrapper">
                {children}
            </div>
        </div>

    );
};

export default Popup;