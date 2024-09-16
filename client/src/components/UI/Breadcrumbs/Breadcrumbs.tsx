import React, {FC} from "react";
import "./breadcrumbs.scss";
import {Breadcrumb} from "../../../types/types";
import {Link} from "react-router-dom";

interface IBreadcrumbsProps {
    items: Breadcrumb[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({items}) => {

    return (
        <div className="breadcrumbs">
            {items.map((item,index) => (
                <div key={index}
                    className={`breadcrumbs__item ${!item.attributes.isSelected ? 'breadcrumbs__item--available' : ''}`}>
                    {!item.attributes.isSelected ?
                        <Link to={item.id ? '/category/' + item.id + '/products' : '/'}>{item.attributes.name}</Link>
                        : <a>{item.attributes.name}</a>
                    }

                </div>
            ))}

        </div>

    );
};