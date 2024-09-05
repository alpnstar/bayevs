import React, {FC} from 'react';
import './news.scss';
import NewsItem from "./NewsItem";
import {News} from "../../types/types";

interface INewsListProps {
    data: News[],

}

const NewsList: FC<INewsListProps> = ({data}) => {
    return (
        <div className="news__list">
            {data.map(item =>
                <NewsItem key={item.id} data={item}/>)}
        </div>
    );
};

export default NewsList;