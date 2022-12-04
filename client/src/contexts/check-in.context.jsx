import { createContext, useState } from "react";

export const CheckInContext = createContext({
    coffeeToCheckIn: null,
    setCoffeeToCheckIn: () => {}
})

export const CheckInProvider = ({children}) => {
    const [coffeeToCheckIn, setCoffeeToCheckIn] = useState(null);

    const value = {
        coffeeToCheckIn,
        setCoffeeToCheckIn
    }

    return <CheckInContext.Provider value={value}>{children}</CheckInContext.Provider>
}