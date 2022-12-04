import { useState } from "react";

import CoffeeCard from "../coffee-card/coffee-card.component";

const CoffeeEntry = ({coffeeEntry}) => {
    const [expanded, setExpanded] = useState(false)

    const expandCard = () => {
        setExpanded(true)
    }

    return (
        <div>
            {
                expanded ? (
                    <CoffeeCard coffeeEntry={coffeeEntry} setExpanded={setExpanded} />
                ) : (
                    <div onClick={expandCard}>{coffeeEntry.coffeeRoaster} {coffeeEntry.coffeeName}</div>
                )
            }
            
        </div>
    )
}

export default CoffeeEntry