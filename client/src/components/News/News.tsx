import React, {FC, useState} from "react";
import NewsList from "./NewsList";
import {useGetNewsQuery} from "../../store/query/newsApi";
import {Pagination} from "../UI/Pagination/Pagination";


export const News: FC = () => {
    const {data, isFetching, isSuccess, isError} = useGetNewsQuery();
    const [currentPage, setCurrentPage] = useState<number>(1);
    return (
        <div className="news">
            <div className="news__wrapper container">
                {data && (
                    <>
                        <NewsList data={data.data}/>
                        <Pagination items={data.data} meta={data.meta} setPage={setCurrentPage}/>
                    </>
                )}
            </div>
        </div>
    );
};