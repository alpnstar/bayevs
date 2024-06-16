import React, {FC} from 'react';
import {Header} from "./components/Header/Header";

import './scss/style.scss';
import RoutesComponent from "./components/Routes/RoutesComponent";
import Slider from "./components/Slider/Slider";

const App: FC = () => {

    return (
        <div className="app">
            <Header/>
            <main>
                <Slider/>
                <RoutesComponent/>
            </main>
        </div>
    );
};

export default App;
