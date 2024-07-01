import "./scss/index.scss";
import React, {FC} from "react";
import {Header} from "./components/Header/Header";
import RoutesComponent from "./components/Routes/RoutesComponent";
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
