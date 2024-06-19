import React, {FC, JSXElementConstructor, MouseEventHandler, ReactNode, useEffect} from 'react';

interface IPopupProps {
    children: ReactNode,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}


const Popup: FC<IPopupProps> = ({children, visible, setVisible}) => {
    function clickHandler(event: React.MouseEvent) {
        let target = event.target as HTMLDivElement;

        if (Array.from(target.classList).indexOf('popup') !== -1) {
            setVisible(false);
        }
    }


    useEffect(() => {
        const bodyElem = (document.getElementById('body') as HTMLBodyElement);
        if (visible) return bodyElem.classList.add('--hidden');
        bodyElem.classList.remove('--hidden');

    }, [visible]);

    return (
        <div onClick={clickHandler} className={`popup ${visible ? 'popup--visible' : ''}`}>
            <div className="popup__wrapper">
                {children}
            </div>
        </div>

    );
};

export default Popup;