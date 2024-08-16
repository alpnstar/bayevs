import React, {FC} from "react";
import {Route, Routes} from "react-router";
import Home from "../Home/Home";
import {CategorySingle} from "../CategorySingle/CategorySingle";
import ProductSingle from "../ProductSingle/ProductSingle";
import {Cart} from "../Cart/Cart";
import {About} from "../About/About";
import {ROUTES} from "../../utils/ROUTES";

const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.category} element={<CategorySingle/>}/>
            <Route path={ROUTES.product} element={<ProductSingle/>}/>
            <Route path={ROUTES.contacts} element={<About/>}/>
            <Route path={ROUTES.cart} element={<Cart foo={''}/>}/>
        </Routes>
    );
};
export default RoutesComponent;

