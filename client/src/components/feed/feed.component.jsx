import { useState, useEffect } from "react";
import CheckInCard from "../check-in-card/check-in-card.component";

const Feed = () => {
    const [feedContents, setFeedContents] = useState([])

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
            {feedContents.map(checkIn => <CheckInCard checkIn={checkIn}/>)}
        </div>
    )
}

export default Feed