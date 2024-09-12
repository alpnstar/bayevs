import React, {FC} from "react";
import "./slider.scss";
import {useGetBannersQuery} from "../../store/query/bannersApi";
import {Slide} from "../UI/Slideshow";

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

const Slider: FC = () => {
    const {data} = useGetBannersQuery();
    return (
        <article className="slider">
            <div className="slider__wrapper container">
                {data && !!data.data.length && <Slide {...properties} transitionDuration={500} autoplay={true} duration={10000} indicators={(index) => <span
                    key={index}

                    className={`slider__bullet-item`}/>}>
                    {data && data.data.map((item, index) => (
                        <div>
                            <a href={item.attributes.link}><img style={{pointerEvents: 'none'}}
                                                                src={item.attributes.media[0].attributes.generated_conversions.list}
                                                                alt=""/></a>
                        </div>
                    ))}

                </Slide>
                }
            </div>
        </article>
    );
};

export default Slider;