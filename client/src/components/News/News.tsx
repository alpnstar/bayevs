import React, {FC} from "react";
import NewsList from "./NewsList";
import {useGetNewsQuery} from "../../store/query/newsApi";


export const News: FC = () => {
    const {data, isFetching, isSuccess, isError} = useGetNewsQuery();
    return (
        <div className="news">
            <div className="news__wrapper container">
                {data && <NewsList data={data.data}/>}
            </div>
        </div>
    );
};