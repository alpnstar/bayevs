import "./scss/index.scss";
import React, {FC, useEffect} from "react";
import {Header} from "./components/Header/Header";
import RoutesComponent from "./components/Routes/RoutesComponent";
import Footer from "./components/Footer/Footer";
import {useAppDispatch} from "./store/hooks";
import {cartActions} from "./store/slices/cartSlice";


const App: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const storage = localStorage.getItem("cart");
        if (storage)
            dispatch(cartActions.setCartState(JSON.parse(storage)));

    }, []);

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
