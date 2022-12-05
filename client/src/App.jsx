import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import AuthenticationPage from "./components/authentication-page/authentication-page.component";
import Home from "./routes/home/home.component";
import PreLoginPage from "./components/pre-login-page/pre-login-page.component";
import PostLoginPage from "./components/post-login-page/post-login-page.component";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route element={<Home />}>
                    <Route index element={<PreLoginPage />} />
                    <Route path=':userId' element={<PostLoginPage />} />
                </Route>
                <Route path='sign-in' element={<AuthenticationPage />} />
            </Route>
        </Routes>
    )
}

export default App