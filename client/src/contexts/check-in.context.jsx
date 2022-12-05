import { createContext, useState } from "react";

export const CheckInContext = createContext({
    coffeeToCheckIn: null,
    setCoffeeToCheckIn: () => {},
    activeSearch: null,
    setActiveSearch: () => {}
})

export const CheckInProvider = ({children}) => {
    const [coffeeToCheckIn, setCoffeeToCheckIn] = useState(null);
    const [activeSearch, setActiveSearch] = useState(false);


    const value = {
        coffeeToCheckIn,
        setCoffeeToCheckIn,
        activeSearch,
        setActiveSearch
    }

    return <CheckInContext.Provider value={value}>{children}</CheckInContext.Provider>
}