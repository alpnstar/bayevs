import React, {FC} from 'react';
import {Header} from "./components/Header/Header";

import './scss/style.scss';
import RoutesComponent from "./components/Routes/RoutesComponent";

const App: FC = () => {

    return (
        <div className="app">
            <Header/>
            <main>
                1
                <RoutesComponent/>
            </main>
        </div>
    );
};

export default App;
