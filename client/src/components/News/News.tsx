import React, {FC, useState} from "react";
import {useGetNewsQuery} from "../../store/query/newsApi";
import {Loader} from "../UI/Loader/Loader";
import NewsList from "./NewsList";
import {Pagination} from "../UI/Pagination/Pagination";


export const News: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data, isFetching, isSuccess, isError} = useGetNewsQuery({
        params: {
            'page[number]': currentPage,

        }
    });
    return (
        <div className="news">
            <div className="news__wrapper container">
                {isFetching ? <Loader /> : data && data.data.length === 0 ? <span>Новостей нет</span> : data && (
                    <>
                        <NewsList data={data.data}/>
                        <Pagination items={data.data} meta={data.meta} setPage={setCurrentPage}/>
                    </>
                )}
            </div>
        </div>
    );
};