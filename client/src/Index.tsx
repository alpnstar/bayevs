import {createRoot} from "react-dom/client";
import React from "react";
import App from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";

createRoot(document.querySelector("#root") as HTMLElement).render(
    <HashRouter>
        <App/>
    </HashRouter>
);