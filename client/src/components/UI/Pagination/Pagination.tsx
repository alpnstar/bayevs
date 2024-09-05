import React, {Dispatch, FC, SetStateAction} from "react";
import _ from "lodash";
import {Meta} from "../../../types/types";
import './pagination.scss';

interface IPaginationProps {
    items: any[];
    meta: Meta,
    setPage: Dispatch<SetStateAction<number>>,
}

export const Pagination: FC<IPaginationProps> = ({items, meta, setPage}) => {

    return (
        <div className="pagination__pagination">
            <ul className="pagination__pagination-list">
                {items && meta.last_page > 1 && _.times(meta.last_page, (i: number) => (
                    <li className={`pagination__pagination-item ${meta.current_page === i + 1 ? 'pagination__pagination-item--active' : ''}`}>
                        <a onClick={() => setPage(i + 1)}
                           className={`pagination__pagination-link `}>
                            {i + 1}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};