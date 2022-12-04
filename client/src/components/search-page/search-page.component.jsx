import { useState, useEffect } from "react";

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
                    <div>{coffeeEntry.coffeeRoaster} {coffeeEntry.coffeeName}</div>
                ))
            }
        </div>
    )
}

export default SearchPage