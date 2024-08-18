import React, {FC} from "react";
import "./breadcrumbs.scss";

interface IBreadcrumbsProps {
    items: string[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = () => {

    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__item breadcrumbs__item--available">
                <a href="#">LF-LABEL</a>
            </div>

        </div>

    );
};