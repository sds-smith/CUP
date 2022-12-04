import { useState, useEffect } from "react";

import CoffeeEntry from "../coffee-entry/coffee-entry.component";

const SearchPage = () => {
    const [coffeeData, setCoffeeData] = useState([])

    useEffect(() => {
        const getCoffeeData = async () => {
            const response = await fetch('http://localhost:8000/coffee-data')
            const coffeeDataResponse = await response.json()
            setCoffeeData(coffeeDataResponse)
        }
        getCoffeeData()
    }, [])

    return (
        <div>
            {
                coffeeData.map(coffeeEntry => (
                    <CoffeeEntry coffeeEntry={coffeeEntry} />
                ))
            }
        </div>
    )
}

export default SearchPage