import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import ProductsList from "../Products/ProductsList";
import PageHeader from "../UI/PageHeader/PageHeader";
import './searchPage.scss';
import {NavLink} from "react-router-dom";
import {Pagination} from "../UI/Pagination/Pagination";
import {useGetProductsQuery} from "../../store/query/productsApi";
import {Loader} from "../UI/Loader/Loader";
import {SITE_NAME} from "../../utils/CONSTS";

export const SearchPage: FC = () => {
    const params = useParams();
    const [search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data, isFetching, isSuccess, isError} = useGetProductsQuery({
        params: {

            'filter[name]': params.search,
        }
    });
    useEffect(() => {
        setSearch(params.search as string);
    }, [params.search]);
    return (
        <section className="search-page">
            <div className="search-page__wrapper container">
                <PageHeader title={'поиск по товарам'} breadcrumbsItems={[{
                    type: 'category',
                    attributes: {name: SITE_NAME, isSelected: false, description: '', path: ''}
                }]}/>
                <form className="search-page__form">
                    <input className="search-page__input" type="text" value={search}
                           onChange={(e) => setSearch(e.target.value)} maxLength={100}/>
                    <NavLink to={search.replace(/\s+/g, '') ? '/search/' + search : ''}>
                        <input type="submit" value="Найти" className="search-page__submit"/>
                    </NavLink>
                </form>
                {isFetching ? <Loader marginTop={'100px'}/> : data && data.data.length !== 0 ? <>
                    <ProductsList products={data.data}/>
                    <Pagination items={data.data} meta={data.meta} setPage={setCurrentPage}/>
                </> : <h3 className="search-page__not-found">Товар не найден</h3>
                }
            </div>
        </section>
    );
};