import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useLazyGetProductsBySearchQuery} from "../../store/query/productsApi";
import ProductsList from "../Products/ProductsList";
import PageHeader from "../UI/PageHeader/PageHeader";
import './searchPage.scss';
import {NavLink} from "react-router-dom";
import {Pagination} from "../UI/Pagination/Pagination";

export const SearchPage: FC = () => {
    const params = useParams();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [trigger, {data, isFetching, isSuccess, isError}] = useLazyGetProductsBySearchQuery();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        if (params.search) {
            trigger(params.search);
            setSearch(params.search);
        }

    }, [params.search]);
    return (
        <section className="search-page">
            <div className="search-page__wrapper container">
                <PageHeader title={'поиск по товарам'} breadcrumbsItems={[{
                    type: 'category',
                    attributes: {name: 'BAYEVS', isSelected: false, description: '', path: ''}
                }]}/>
                <form className="search-page__form">
                    <input className="search-page__input" type="text" value={search}
                           onChange={(e) => setSearch(e.target.value)} maxLength={100}/>
                    <NavLink to={search.replace(/\s+/g, '') ? '/search/' + search : ''}>
                        <input type="submit" value="Найти" className="search-page__submit"/>
                    </NavLink>
                </form>
                {isSuccess && data.data.length !== 0 ? (
                    <>
                        <ProductsList products={data.data}/>
                        <Pagination items={data.data} meta={data.meta} setPage={setCurrentPage}/>
                    </>
                ) : isSuccess && data.data.length === 0 ?
                    <h3 className="search-page__not-found">Товар не найден</h3> : isError ?
                        <h3 className="search-page__not-found">Ошибка</h3> : ''}
            </div>
        </section>
    );
};