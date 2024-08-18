import React, {FC} from "react";
import {Route, Routes} from "react-router";
import Home from "../Home/Home";
import {CategorySingle} from "../CategorySingle/CategorySingle";
import ProductSingle from "../ProductSingle/ProductSingle";
import {Cart} from "../Cart/Cart";
import {About} from "../About/About";
import {ROUTES} from "../../utils/ROUTES";
import {Contacts} from "../Contacts/Contacts";
import {ToCustomers} from "../ToCustomers/ToCustomers";
import {ToWholesalers} from "../ToWholesalers/ToWholesalers";
import {AboutCompany} from "../AboutCompany/AboutCompany";

const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.category} element={<CategorySingle/>}/>
            <Route path={ROUTES.product} element={<ProductSingle/>}/>
            <Route path={ROUTES.contacts} element={<Contacts/>}/>
            <Route path={ROUTES.toCustomers} element={<ToCustomers/>}/>
            <Route path={ROUTES.toWholesalers} element={<ToWholesalers/>}/>
            <Route path={ROUTES.aboutCompany} element={<AboutCompany/>}/>
            <Route path={ROUTES.cart} element={<Cart/>}/>
        </Routes>
    );
};
export default RoutesComponent;

