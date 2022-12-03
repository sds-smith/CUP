import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const App = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null)

    return (
        <Routes>
            <Route path='/' element={<Navigation setAuthenticatedUser={setAuthenticatedUser} authenticatedUser={authenticatedUser} />}>
                <Route index element={<Home authenticatedUser={authenticatedUser} />} />
            </Route>
        </Routes>
    )
}

export default App