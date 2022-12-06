import { useEffect, useContext } from "react";
import CheckInCard from '../../cards/check-in-card/check-in-card.component'
import { FeedContext } from "../../../contexts/feed.context";

import { httpGetFriendActivity } from "../../../utils/http/requests";

const Feed = () => {
    const {feedContents, setFeedContents} = useContext(FeedContext)

    useEffect(() => {
        const getFriendActivity = async () => {
            const friendsActivityResponse = await httpGetFriendActivity()
            setFeedContents(friendsActivityResponse)
        }
        getFriendActivity();
    }, [])

    return (
        <div>
            <h2>Recent Friend Activity</h2>
            {feedContents.map(checkIn => <CheckInCard key={checkIn.timeStamp} checkIn={checkIn}/>)}
        </div>
    )
}

export default Feed