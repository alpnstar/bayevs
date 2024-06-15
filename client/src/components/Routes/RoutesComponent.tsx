import React, {FC} from 'react';
import {Route, Routes} from "react-router";
import Home from "../Home/Home";

const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    );
};
export default RoutesComponent;

