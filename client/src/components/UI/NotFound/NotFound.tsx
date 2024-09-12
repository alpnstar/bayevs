import React, {FC} from "react";
import './notFound.scss';

export const NotFound:FC = () => {

  return (
    <div className="not-found-page">
        <div className="not-found-page__wrapper container">
            <h1 className={'main-h1'}>ОШИБКА 404: СТРАНИЦА НЕ НАЙДЕНА</h1>
            <span>Возможно, вы перешли по устаревшей или неправильной ссылке.</span>
        </div>
    </div>
  );
};