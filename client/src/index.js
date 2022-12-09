import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { CheckInProvider } from "./contexts/check-in.context";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(
    <BrowserRouter>
            <UserProvider>
                <CheckInProvider>
                    <App/>
                </CheckInProvider>
            </UserProvider>
    </BrowserRouter>
)