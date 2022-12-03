import { useState } from "react";

const CheckInInput = ({setFeedContents}) => {
    const [activeCheckIn, setActiveCheckIn] = useState(false);
    const [friend, setFriend] = useState('')
    const [coffeeRoaster, setCoffeeRoaster] = useState('')
    const [coffeeName, setCoffeeName] = useState('')
    const [extractionMethod, setExtractionMethod] = useState('')

    const onClick = () => {
        setActiveCheckIn(true)
    }

    const onChange = ({target}) => {
        const {name, value} = target

        switch (name) {
            case 'name':
                setFriend(value)
                break
            case 'roaster':
                setCoffeeRoaster(value)
                break
            case 'coffee':
                setCoffeeName(value)
                break
            case 'method':
                setExtractionMethod(value)
                break
            default:
                break
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const checkInData = {
            friend,
            coffeeRoaster,
            coffeeName,
            extractionMethod
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

        setActiveCheckIn(false)
        setFriend('')
        setCoffeeName('')
        setCoffeeRoaster('')
        setExtractionMethod('')
    }

    const checkInButton = <button onClick={onClick}>Check in your Cup</button>

    const checkInForm = (
        <form onSubmit={onSubmit}>
            <input type='text' name='name' onChange={onChange} value={friend} placeholder='Your Name'/>
            <input type='text' name='roaster' onChange={onChange} value={coffeeRoaster} placeholder='Roaster'/>
            <input type='text' name='coffee' onChange={onChange} value={coffeeName} placeholder='Coffee Name'/>
            <input type='text' name='method' onChange={onChange} value={extractionMethod} placeholder='Extraction Method'/>
            <button type='submit'>SAVE</button>
        </form>
    )

    return (
        <div>
            {
                activeCheckIn ? checkInForm : checkInButton 
            }
        </div>
    )
}

export default CheckInInput