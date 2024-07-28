import React, {FC} from 'react';
import './carouselArrows.scss';

interface ICarouselArrowsProps {
    position: {
        leftArrow: {
            left: string,
            top: string,
        },
        rightArrow: {
            left: string,
            top: string,
        },
    }
    leftAction: () => void,
    rightAction: () => void,
    children: React.ReactNode,
}

const CarouselArrows: FC<ICarouselArrowsProps> = ({position, leftAction, rightAction, children}) => {
    return (
        <>
            <svg
                onClick={() => leftAction()}
                className="carousel-arrow carousel-arrow__left"
                style={position.leftArrow}
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
            </svg>
            {children}
            <svg
                onClick={() => rightAction()}
                className="carousel-arrow carousel-arrow__right"
                style={position.rightArrow}
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
        </>
    );
};

export default CarouselArrows;