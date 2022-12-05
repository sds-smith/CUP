import { useState } from "react";

const AddCoffeeForm = () => {
    const [activeAdding, setActiveAdding] = useState(false)
    const [coffeeName, setCoffeeName] = useState('')
    const [coffeeRoaster, setCoffeeRoaster] = useState('')
    const [origin, setOrigin] = useState('')
    const [cultivar, setCultivar] = useState('')
    const [process, setProcess] = useState('')
    const [roast, setRoast] = useState('')
    const [description, setDescription] = useState('')

    const toggleForm = () => {
        setActiveAdding(!activeAdding)
    }

    const onChange = ({target}) => {
        const {name, value} = target
        switch(name) {
            case 'coffeeName':
                setCoffeeName(value)
                break
            case 'coffeeRoaster':
                setCoffeeRoaster(value)
                break
            case 'origin':
                setOrigin(value)
                break
            case 'cultivar':
                setCultivar(value)
                break
            case 'process':
                setProcess(value)
                break
            case 'roast':
                setRoast(value)
                break
            case 'description':
                setDescription(value)
                break   
            default:
                break 
        }
    }

    const submitNewCoffee = async () => {
        const coffeeToSubmit = {
            coffeeName,
            coffeeRoaster,
            origin,
            cultivar,
            process,
            roast,
            description
        }

        toggleForm()
        const response = await fetch('http://localhost:8000/coffee-data', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffeeToSubmit)
        })
        const addResponse = await response.json()

        setCoffeeName('')
        setCoffeeRoaster('')
        setOrigin('')
        setCultivar('')
        setProcess('')
        setRoast('')
        setDescription('')
    }

    const buttonText = activeAdding ? 'Exit Form' : 'Add Coffee'

    return (
        <div>
            <p>Don't see your coffee? Add it to the database:</p>
            <button onClick={toggleForm}>{buttonText}</button>
            {
                activeAdding ? (
                    <form onSubmit={submitNewCoffee} >
                        <input type='text' onChange={onChange} name='coffeeName' value={coffeeName} placeholder='Coffee Name' />
                        <input type='text' onChange={onChange} name='coffeeRoaster' value={coffeeRoaster} placeholder='Coffee Roaster' />
                        <input type='text' onChange={onChange} name='origin' value={origin} placeholder='Origin' />
                        <input type='text' onChange={onChange} name='cultivar' value={cultivar} placeholder='Cultivar' />
                        <input type='text' onChange={onChange} name='process' value={process} placeholder='Process' />   
                        <input type='text' onChange={onChange} name='roast' value={roast} placeholder='Roast' />        
                        <input type='text' onChange={onChange} name='description' value={description} placeholder='Description' />  
                        <button type='submit'>Submit</button>           
                    </form>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default AddCoffeeForm