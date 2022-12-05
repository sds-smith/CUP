import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CheckInContext } from '../../contexts/check-in.context';

import './coffee-card.styles.css';

const CoffeeCard = ({coffeeEntry, closeAction, checkInForm}) => {
    const {setCoffeeToCheckIn} = useContext(CheckInContext)

    const navigate = useNavigate();
    const {userId} = useParams()

    const {
        coffeeName,
        coffeeRoaster,
        singleOrigin,
        origin,
        cultivar,
        process,
        roastLevel,
        description
    } = coffeeEntry

    const closeCard = () => {
        closeAction()
    }

    const checkIn = () => {
        setCoffeeToCheckIn(coffeeEntry)
        const coffeeParam = coffeeName.split(' ').join('-').toLowerCase();
        navigate(`/${userId}/check-in/${coffeeParam}`)
    }

    return (
        <div className='CoffeeCardContainer'>
            <div onClick={closeCard}>X</div>
            <h1>{coffeeName}</h1>
            <h2>{coffeeRoaster}</h2>
            <p>{origin}</p>
            <p>{cultivar}</p>
            <p>{process}</p>
            <p>{roastLevel}</p>
            <p>{description}</p>
            {
                checkInForm ? (
                    <div></div>
                ) : (
                    <button onClick={checkIn} >Check In {coffeeName}</button>
                )
            }
        </div>
    )
}

export default CoffeeCard