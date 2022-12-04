import { useState, useContext } from "react";

import CoffeeCard from "../coffee-card/coffee-card.component";

import {UserContext} from '../../contexts/user.context';
import {CheckInContext} from '../../contexts/check-in.context'

const CheckInForm = ({setFeedContents}) => {
    const [extractionMethod, setExtractionMethod] = useState('')

    const {authenticatedUser} = useContext(UserContext);
    const {coffeeToCheckIn} = useContext(CheckInContext)

    const {
        coffeeName,
        coffeeRoaster,
        singleOrigin,
        origin,
        cultivar,
        process,
        roastLevel,
        description
    } = coffeeToCheckIn

    const onChange = ({target}) => {
        const { value } = target
        setExtractionMethod(value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const timeStamp = Date.now()
        const friend = authenticatedUser.displayName
        const checkInData = {
            friend,
            coffeeRoaster,
            coffeeName,
            extractionMethod,
            timeStamp
        }
        try {
            const response = await fetch('http://localhost:8000/check-in-my-cup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(checkInData)
            })
            const newFeed = await response.json();
            setFeedContents(newFeed)
        } catch(err) {
            console.log(err)
            return err
        }
        setExtractionMethod('')
    }

    // const checkInButton = <button onClick={onClick}>Check in your Cup</button>

    // const checkInForm = (
    //     <form onSubmit={onSubmit}>
    //         <input type='text' name='roaster' onChange={onChange} value={coffeeRoaster} placeholder='Roaster'/>
    //         <input type='text' name='coffee' onChange={onChange} value={coffeeName} placeholder='Coffee Name'/>
    //         <input type='text' name='method' onChange={onChange} value={extractionMethod} placeholder='Extraction Method'/>
    //         <button type='submit'>SAVE</button>
    //     </form>
    // )

    return (
        <div>
            <CoffeeCard coffeeEntry={coffeeToCheckIn} />
            <form onSubmit={onSubmit}>
                <input type='text' name='method' onChange={onChange} value={extractionMethod} placeholder='Extraction Method'/>
                <button type='submit'>SAVE</button>
            </form>
        </div>
    )
}

export default CheckInForm