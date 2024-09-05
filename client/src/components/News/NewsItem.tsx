import React, {FC} from 'react';
import {News} from "../../types/types";
import {NavLink} from "react-router-dom";

interface INewsItemProps {
    data: News,

}

const NewsItem: FC<INewsItemProps> = ({data}) => {
    return (
        <NavLink to={'/news/' + data.id} className="news__item">
            <div
                className="news__item-img-wrapper">
                <img src={data.attributes.media[0].attributes.generated_conversions.list} alt=""/>
            </div>
            <div className="news__item-content-wrapper">

                <div className="news__item-description">
                    <span className="news__item-title">
                {data.attributes.title}
            </span>
                    <div className="news__item-text">
                        {data.attributes.content}
                    </div>
                </div>
                <span className="news__item-date">{data.attributes.created_at}</span>
            </div>
        </NavLink>
    );
};

export default NewsItem;