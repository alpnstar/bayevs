import React, {FC, useState} from "react";
import "./slider.scss";
import Carousel from "../UI/Carousel-compound";
import Page from "../UI/Carousel-compound/Page";
import IMG from "../../../public/images/banner.jpg";

interface ISliderElem {
    imgSrc: string,
    url: string,
}

const Slider: FC = () => {

    const [data] = useState<ISliderElem[]>([
        {
            imgSrc: IMG,
            url: ""
        },

        {
            imgSrc: IMG,
            url: ""
        },

        {
            imgSrc: IMG,
            url: ""
        }
    ]);
    return (
        <article className="slider">
            <div className="slider__wrapper container">
                <Carousel infinite={true} widthInput={100}>
                    {data.map(item => (
                        <Page>
                            <div>
                                <a href={item.url}><img  className="carousel__item-img" src={item.imgSrc} alt=""/></a>
                            </div>
                        </Page>
                    ))}


                </Carousel>
            </div>
        </article>
    );
};

export default Slider;