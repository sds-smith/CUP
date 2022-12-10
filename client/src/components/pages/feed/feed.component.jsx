import { useEffect, useContext } from "react";
import CheckInCard from '../../cards/check-in-card/check-in-card.component'
import { FeedContext } from "../../../contexts/feed.context";

const Feed = () => {
    const {feedContents, refreshFeed} = useContext(FeedContext)

    useEffect(() => {
        const getFriendActivity = async () => {
            await refreshFeed()
        }
        getFriendActivity();
    }, [])

    return (
        <div>
            <h2>Recent Friend Activity</h2>
            {feedContents.map(checkIn => <CheckInCard key={checkIn.id} checkIn={checkIn}/>)}
        </div>
    )
}

export default Feed