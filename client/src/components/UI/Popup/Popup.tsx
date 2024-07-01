import React, {FC, ReactNode, useEffect} from "react";
import "./popup.scss";

interface IPopupProps {
    children: ReactNode,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}


const Popup: FC<IPopupProps> = ({children, visible, setVisible}) => {
    function clickHandler(event: React.MouseEvent) {
        const target = event.target as HTMLDivElement;

        if (Array.from(target.classList).indexOf("popup") !== -1) {
            setVisible(false);
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