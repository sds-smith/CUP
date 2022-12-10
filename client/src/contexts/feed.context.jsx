import { useState, createContext } from "react";
import { httpGetFriendActivity } from "../utils/http/requests";

export const FeedContext = createContext({
    feedContents: null,
    setFeedContents: () => {}
})

export const FeedProvider = ({children}) => {
    const [feedContents, setFeedContents] = useState([])

    const refreshFeed = async () => {
        const friendsActivityResponse = await httpGetFriendActivity()
        setFeedContents(friendsActivityResponse)
    }

    const value = {
        feedContents,
        setFeedContents,
        refreshFeed
    }

    return <FeedContext.Provider value={value} >{children}</FeedContext.Provider>
}