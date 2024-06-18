import React, {FC} from 'react';
import {Header} from "./components/Header/Header";

import './scss/style.scss';
import RoutesComponent from "./components/Routes/RoutesComponent";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

const App: FC = () => {

    return (
        <div className="app">
            <Header/>
            <main>
                <RoutesComponent/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
