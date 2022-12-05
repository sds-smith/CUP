import { useState, createContext } from "react";

export const FeedContext = createContext({
    feedContents: null,
    setFeedContents: () => {}
})

export const FeedProvider = ({children}) => {
    const [feedContents, setFeedContents] = useState([])

    const value = {
        feedContents,
        setFeedContents
    }

    return <FeedContext.Provider value={value} >{children}</FeedContext.Provider>
}