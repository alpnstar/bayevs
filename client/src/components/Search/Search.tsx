import React, {FC, useState} from "react";
import "./search.scss";
import {useNavigate} from "react-router";

interface ISearch {
    setVisibleHandler: (arg: boolean) => void,

}

const Search: FC<ISearch> = ({setVisibleHandler}) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    function handler() {
        if (search.replace(/\s+/g, '')) {
            setVisibleHandler(false);
            navigate('/search/' + search);

        }

    }

    return (
        <section className="search__wrapper">
            <div className="search__form">
                <input onKeyUp={({key}) => {
                    if (key === 'Enter') handler();
                }} className="search__input" type="search" value={search}
                       onChange={(e) => setSearch(e.target.value)} maxLength={100}
                       placeholder="введите поисковый запрос"/>
                <svg onClick={handler} className="search__submit" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                </svg>
            </div>
        </section>
    );
};

export default Search;