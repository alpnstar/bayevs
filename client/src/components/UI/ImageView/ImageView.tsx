import React, {FC, SetStateAction} from 'react';
import Popup from "../Popup/Popup";
import CarouselArrows from "../CarouselArrows/CarouselArrows";
import {togglerHandlerType} from "../../../hooks/useToggler";
import './imageView.scss';
import {Media, MediaAttributes} from "../../../types/types";

interface IImageView {
    data: Media[],
    display: boolean,
    setDisplay: togglerHandlerType,
    indexSelectedImage: number,
    setIndexSelectedImage: React.Dispatch<SetStateAction<number>>
}

export const ImageView: FC<IImageView> = ({data, indexSelectedImage, setIndexSelectedImage, display, setDisplay}) => {
    return (
        <Popup visible={display} setVisibleHandler={setDisplay}>
            <CarouselArrows position={{
                leftArrow: {
                    left: '1%',
                    top: '50%',
                },
                rightArrow: {
                    left: '99%',
                    top: '50%',
                }
            }} leftAction={() => {
                if (indexSelectedImage !== 0) setIndexSelectedImage(indexSelectedImage - 1);

            }} rightAction={() => {
                if (indexSelectedImage !== data.length - 1) setIndexSelectedImage(indexSelectedImage + 1);
            }}>
                <div className="image-view">
                    <div className="image-view__item">
                        <img src={data[indexSelectedImage].attributes.generated_conversions.list} alt=""/>
                    </div>
                    <div className="image-view__counter">
                        {indexSelectedImage + 1 + ' из ' + data.length}
                    </div>
                </div>
            </CarouselArrows>
        </Popup>
    );
};

export default ImageView;