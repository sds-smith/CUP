import './check-in-card.styles.css';

const CheckInCard = ({checkIn}) => {
    const timeStamp = new Date(checkIn.timeStamp).toLocaleString()
    return (
        <div className='CheckInCardContainer'>
            <p>{timeStamp}</p>
            <h3>{checkIn.user} is sipping:</h3>
            {/* {checkIn.imageUrl ? <img src={checkIn.imageUrl} className='CheckInImage' alt='check-in image'/> : <div>No Image</div>} */}
            <div>Roaster: {checkIn.coffee}</div>
            <div>Name: {checkIn.coffee}</div>
            <div>Method: {checkIn.extractionMethod}</div>
        </div>
    )
}

export default CheckInCard