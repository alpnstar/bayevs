import React, {Dispatch, FC, SetStateAction} from 'react';

interface ICloseButtonProps {
    setState: Dispatch<SetStateAction<boolean>>,
}

const CloseButton: FC<ICloseButtonProps> = ({setState}) => {
    function clickHandler() {
        setState(false);
    }

    return (
        <div onClick={clickHandler} className="close-button">

        </div>
    );
};

export default CloseButton;