import './check-in-card.styles.css';

const CheckInCard = ({checkIn}) => {

    return (
        <div className='CheckInCardContainer'>
            <h3>{checkIn.friend} is sipping:</h3>
            {checkIn.imageUrl ? <img src={checkIn.imageUrl} className='CheckInImage' alt='check-in image'/> : <div>No Image</div>}
            <div>Roaster: {checkIn.coffeeRoaster}</div>
            <div>Name: {checkIn.coffeeName}</div>
            <div>Method: {checkIn.extractionMethod}</div>
        </div>
    )
}

export default CheckInCard