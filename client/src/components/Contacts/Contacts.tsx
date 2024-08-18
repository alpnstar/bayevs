import React, {FC} from "react";
import './contacts.scss';
import {About} from "../About/About";

export const Contacts: FC = () => {

    return (
        <About title={'Контакты'}>
            <div className="contacts">
                <h3 className="contacts__h3">Телефоны для связи:</h3>
                <ul className="contacts__phone-list">
                    <li className="contacts__phone-list-item"><p>+7 (920) 872-70-40</p></li>
                    <li className="contacts__phone-list-item"><p>+7 (925) 888-94-83</p></li>
                </ul>
                <h3 className="contacts__email">E-mail: <a href="mailto:lf-label@mail.ru">lf-label@mail.ru</a></h3>
                <h2 className="main-h2">ГДЕ МОЖНО ПРИОБРЕСТИ НАШУ ПРОДУКЦИЮ ОПТОМ?</h2>
                <p>Москва, ТК «Южные Ворота», 19 километр МКАД, вход 16 линия П-17, пав. 86</p>

                <h3 className="contacts__h3">Телефоны:</h3>
                <ul className="contacts__phone-list">
                    <li className="contacts__phone-list-item"><p>+7 (925) 888-94-83</p></li>
                    <li className="contacts__phone-list-item"><p>+7 (916) 630-36-68</p></li>
                </ul>
                <h3 className="contacts__email">E-mail: <a href="mailto:lf-label@bk.ru">lf-label@bk.ru</a></h3>

            </div>

        </About>
    );
};