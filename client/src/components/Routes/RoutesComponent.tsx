import React, {FC} from "react";
import {Route, Routes} from "react-router";
import Home from "../Home/Home";
import {CategorySingle} from "../CategorySingle/CategorySingle";
import ProductSingle from "../ProductSingle/ProductSingle";
import {Cart} from "../Cart/Cart";
import {ROUTES} from "../../utils/ROUTES";
import {Contacts} from "../Contacts/Contacts";
import {ToCustomers} from "../ToCustomers/ToCustomers";
import {ToWholesalers} from "../ToWholesalers/ToWholesalers";
import {AboutCompany} from "../AboutCompany/AboutCompany";
import {About} from "../About/About";
import {News} from "../News/News";
import NewsSingle from "../News/NewsSingle";
import {SearchPage} from "../Search/SearchPage";
import {NotFound} from "../UI/NotFound/NotFound";
import {Registration} from "../Registration/Registration";
import {Authorization} from "../Authorization/Authorization";
import {Orders} from "../Orders/Orders";
import {OrdersHOC} from "../Orders/OrdersHOC";

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
            <Route path={ROUTES.news} element={<About title={'Новости'} children={<News/>}/>}/>
            <Route path={ROUTES.newsById} element={<NewsSingle/>}/>
            <Route path={ROUTES.cart} element={<Cart/>}/>
            <Route path={ROUTES.search} element={<SearchPage/>}/>
            <Route path={ROUTES.registration} element={<Registration/>}/>
            <Route path={ROUTES.authorization} element={<Authorization/>}/>
            <Route path={ROUTES.orders} element={<OrdersHOC/>}/>
            <Route path={'/*'} element={<NotFound/>}/>
        </Routes>
    );
};
export default RoutesComponent;

