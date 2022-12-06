import { useState, useEffect } from "react";

import CoffeeEntry from "../../cards/coffee-entry/coffee-entry.component";
import AddCoffeeForm from '../../forms/add-coffee-form/add-coffee-form.component'

import { httpGetCoffeeData } from "../../../utils/http/requests";

const SearchPage = () => {
    const [coffeeData, setCoffeeData] = useState([])

    useEffect(() => {
        const getCoffeeData = async () => {
            const coffeeDataResponse = await httpGetCoffeeData()
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