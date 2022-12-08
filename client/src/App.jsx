import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import AuthenticationPage from "./routes/authentication-page/authentication-page.component";
import SignIn from "./components/forms/sign-in/sign-in.component";
import Oops from "./components/pages/oops/oops.component";
import Home from "./routes/home/home.component";
import PreLoginPage from "./components/pages/pre-login-page/pre-login-page.component";
import PostLoginPage from "./components/pages/post-login-page/post-login-page.component";
import SearchPage from "./components/pages/search-page/search-page.component";
import Feed from "./components/pages/feed/feed.component";
import CheckInForm from './components/forms/check-in-form/check-in-form.component';

import {FeedProvider} from './contexts/feed.context'

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route element={<Home />}>
                    <Route index element={<PreLoginPage />} />
                    <Route path=':userId' element={
                        <FeedProvider>
                            <PostLoginPage />
                        </FeedProvider>
                    }>
                            <Route index element={<Feed/>} />
                            <Route path='search' element={<SearchPage/>} />
                            <Route path='check-in/*' element={<CheckInForm/>}/>                   
                    </Route>
                </Route>
                <Route path='sign-in' element={<AuthenticationPage />} >
                    <Route index element={<SignIn/>} />
                    <Route path='oops' element={<Oops/>} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App