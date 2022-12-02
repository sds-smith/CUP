import CheckInCard from "../check-in-card/check-in-card.component";

const Feed = () => {

    const feedContents = [
        {
            friend: "Chip",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuK6yooE-eB-zh2lmhV8Vz7JVxGZkufNES0P1HeLvmepEbPSSZLl6No-Z8m3a-gYUD9w&usqp=CAU",
            coffeeRoaster: "Dark Matter",
            coffeeName: "Old Dank Nic",
            extractionMethod: "V60 Pourover"
        },
        {
            friend: "Dale",
            imageUrl: "data:image/jpeg;base64,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",
            coffeeRoaster: "Ceremony",
            coffeeName: "Thesis",
            extractionMethod: "Wave Pourover"
        },
    ]

    return (
        <div>
            <h2>Recent Friend Activity</h2>
            {feedContents.map(checkIn => <CheckInCard checkIn={checkIn}/>)}
        </div>
    )
}

export default Feed