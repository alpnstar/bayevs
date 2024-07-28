import React, {FC} from "react";
import "./search.scss";

const Search: FC = () => {
    return (
        <section className="search__wrapper">
            <div className="search__form">
                <input className="search__input" type="search" value="" maxLength={100}
                       placeholder="введите поисковый запрос"/>
                <input className="search__submit" type="submit" value=""/>
            </div>
        </section>
    );
};

export default Search;