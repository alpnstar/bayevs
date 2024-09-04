import React from 'react';
import {Breadcrumbs} from '../Breadcrumbs/Breadcrumbs';
import './pageHeader.scss';
import {Breadcrumb} from "../../../types/types";

interface IPageHeaderProps {
    title: string;
    breadcrumbsItems: Breadcrumb[];
}

const PageHeader: React.FC<IPageHeaderProps> = ({title, breadcrumbsItems}) => {
    return (
        <section className="page-header">
            <Breadcrumbs items={breadcrumbsItems}/>
            <span className="page-header__title">
        <h1 className="main-h1">{title}</h1>
      </span>
        </section>
    );
};

export default PageHeader;