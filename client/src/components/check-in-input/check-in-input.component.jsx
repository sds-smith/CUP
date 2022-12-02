import { useState } from "react";

const CheckInInput = () => {
    const [activeCheckIn, setActiveCheckIn] = useState(false);

    const onClick = () => {
        setActiveCheckIn(true)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setActiveCheckIn(false)
    }

    const checkInButton = <button onClick={onClick}>Check in your Cup</button>

    const checkInForm = (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Your Name'/>
            <input type='text' placeholder='Roaster'/>
            <input type='text' placeholder='Coffee Name'/>
            <input type='text' placeholder='Extraction Method'/>
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