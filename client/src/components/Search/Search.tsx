import React, {FC, useState} from "react";
import "./search.scss";
import {NavLink} from "react-router-dom";

interface ISearch {
    setVisibleHandler: (arg: boolean) => void,

}

const Search: FC<ISearch> = ({setVisibleHandler}) => {
    const [search, setSearch] = useState('');


    return (
        <section className="search__wrapper">
            <div className="search__form">
                <input className="search__input" type="search" value={search}
                       onChange={(e) => setSearch(e.target.value)} maxLength={100}
                       placeholder="введите поисковый запрос"/>
                <NavLink onClick={() => setVisibleHandler(false)} to={'/search/' + search}>
                    <svg className="search__submit" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                    </svg>
                </NavLink>
            </div>
        </section>
    );
};

export default Search;