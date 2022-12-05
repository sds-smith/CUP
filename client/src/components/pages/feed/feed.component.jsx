import { useState, useEffect, useContext } from "react";
import CheckInCard from '../../cards/check-in-card/check-in-card.component'
import { FeedContext } from "../../../contexts/feed.context";

const Feed = () => {
    const {feedContents, setFeedContents} = useContext(FeedContext)

    useEffect(() => {
        const getFriendActivity = async () => {
            const response = await fetch('http://localhost:8000/friends-activity')
            const friendsActivityResponse = await response.json();
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