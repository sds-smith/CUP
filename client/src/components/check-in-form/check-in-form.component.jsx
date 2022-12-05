import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CoffeeCard from "../coffee-card/coffee-card.component";

import {UserContext} from '../../contexts/user.context';
import {CheckInContext} from '../../contexts/check-in.context';
import {FeedContext} from '../../contexts/feed.context'

const CheckInForm = () => {
    const [extractionMethod, setExtractionMethod] = useState('')

    const {authenticatedUser} = useContext(UserContext);
    const {coffeeToCheckIn, setActiveSearch} = useContext(CheckInContext);
    const {setFeedContents} = useContext(FeedContext);

    const navigate = useNavigate();
    const {userId} = useParams();

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
        setExtractionMethod('');
        setActiveSearch(false)
        navigate(`/${userId}`)
    }

    const returnToSearch = () => {
        navigate(`/${userId}/search`)
    }

    return (
        <div>
            <CoffeeCard checkInForm coffeeEntry={coffeeToCheckIn} closeAction={returnToSearch} />
            <form onSubmit={onSubmit}>
                <input type='text' name='method' onChange={onChange} value={extractionMethod} placeholder='Extraction Method'/>
                <button type='submit'>CHECK IN</button>
            </form>
        </div>
    )
}

export default CheckInForm