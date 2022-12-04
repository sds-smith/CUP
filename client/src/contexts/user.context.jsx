import { createContext, useState } from "react";

export const UserContext = createContext({
    authenticatedUser: null,
    setAuthenticatedUser: () => {}
})

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const userExists = authenticatedUser !== null;

    const value = {
        authenticatedUser, 
        setAuthenticatedUser,
        userExists
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}