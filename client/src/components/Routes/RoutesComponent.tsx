import React, {FC} from "react";
import {Route, Routes} from "react-router";
import Home from "../Home/Home";
import {CategorySingle} from "../CategorySingle/CategorySingle";
import ProductSingle from "../ProductSingle/ProductSingle";

const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'/category'} element={<CategorySingle/>}/>
            <Route path={'/product'} element={<ProductSingle/>}/>
        </Routes>
    );
};
export default RoutesComponent;

