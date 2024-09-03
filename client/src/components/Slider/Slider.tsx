import React, {FC} from "react";
import "./slider.scss";
import Carousel from "../UI/Carousel-compound";
import Page from "../UI/Carousel-compound/Page";
import {useGetBannersQuery} from "../../store/query/bannersApi";

interface ISliderElem {
    imgSrc: string,
    url: string,
}

const Slider: FC = () => {
    const {data} = useGetBannersQuery();
    return (
        <article className="slider">
            <div className="slider__wrapper container">
                <Carousel infinite={true} widthInput={100}>
                    {data && data.data.map(item => (
                        <Page>
                            <div >
                                <a href={item.attributes.link}><img className="carousel__item-img" src={item.attributes.media[0].attributes.generated_conversions.list} alt=""/></a>
                            </div>
                        </Page>
                    ))}


                </Carousel>
            </div>
        </article>
    );
};

export default Slider;