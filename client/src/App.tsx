import React, {FC} from 'react';
import {Header} from "./components/Header/Header";

import './scss/style.scss';

const App: FC = () => {

    return (
        <div className="app">
            <Header/>
        </div>
    );
};

export default App;
