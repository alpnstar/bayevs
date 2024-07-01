import React, {FC} from "react";
import {Route, Routes} from "react-router";
import Home from "../Home/Home";
import {CategorySingle} from "../CategorySingle/CategorySingle";

const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'/category'} element={<CategorySingle/>}/>
        </Routes>
    );
};
export default RoutesComponent;

