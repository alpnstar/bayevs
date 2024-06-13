import {createRoot} from "react-dom/client";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)