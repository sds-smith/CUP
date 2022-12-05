import { useState, useEffect } from "react";

import CoffeeEntry from "../coffee-entry/coffee-entry.component";
import AddCoffeeForm from "../add-coffee-form/add-coffee-form.component";

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
                    <CoffeeEntry key={coffeeEntry.id} coffeeEntry={coffeeEntry} />
                ))
            }
            <AddCoffeeForm />
        </div>
    )
}

export default SearchPage