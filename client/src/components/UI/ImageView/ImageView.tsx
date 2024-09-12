import React, {FC} from 'react';
import Popup from "../Popup/Popup";
import {togglerHandlerType} from "../../../hooks/useToggler";
import './imageView.scss';
import {Media} from "../../../types/types";
import {Slide} from "../Slideshow";
import '../../UI/CarouselArrows/carouselArrows.scss'

interface IImageView {
    data: Media[],
    display: boolean,
    setDisplay: togglerHandlerType,
    indexSelectedImage: number,
}

const properties = {

    prevArrow: <svg
        className="carousel-arrow carousel-arrow__left"
        width="25px"
        height="50px"
        viewBox="0 0 25 50"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="carousel__slidenav-previous-large"
    >
        <polyline strokeWidth="4" points="22,1.5 22,48.5" fill="none" stroke="#dddddd"/>
        <polyline strokeWidth="4" points="22,1.5 2,25" fill="none" stroke="#dddddd" strokeLinecap="round"
                  strokeLinejoin="round"/>
        <polyline strokeWidth="4" points="2,25 22,48.5" fill="none" stroke="#dddddd" strokeLinecap="round"
                  strokeLinejoin="round"/>
    </svg>,
    nextArrow: <svg
        className="carousel-arrow carousel-arrow__right"
        width="25px"
        height="50px"
        viewBox="0 0 25 50"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="carousel__slidenav-next-large"
    >
        <polyline strokeWidth="4" points="3,1.5 3,48.5" fill="none" stroke="#dddddd"/>
        <polyline strokeWidth="4" points="3,1.5 23,25" fill="none" stroke="#dddddd" strokeLinecap="round"
                  strokeLinejoin="round"/>
        <polyline strokeWidth="4" points="23,25 3,48.5" fill="none" stroke="#dddddd" strokeLinecap="round"
                  strokeLinejoin="round"/>
    </svg>
}

export const ImageView: FC<IImageView> = ({data, indexSelectedImage, display, setDisplay}) => {
    return (
        <Popup visible={display} setVisibleHandler={setDisplay}>
            <Slide {...properties} defaultIndex={indexSelectedImage} autoplay={false} transitionDuration={200}
                   containerSize={{maxWidth: '500px', width: '100%', height: 'auto'}}>

                {data.map((item, index) => (
                    <div key={index} className="each-slide-effect">
                        <div className="slider-item">
                            <img src={item.attributes.generated_conversions.list}  alt=""/>
                        </div>
                    </div>
                ))}


            </Slide>
        </Popup>
    );
};

export default ImageView;