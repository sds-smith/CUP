
import './coffee-card.styles.css';

const CoffeeCard = ({coffeeEntry, setExpanded}) => {
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
        setExpanded(false)
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
        </div>
    )
}

export default CoffeeCard