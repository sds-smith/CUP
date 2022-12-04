import { useState } from "react";

import SearchPage from "../search-page/search-page.component";
import Feed from "../feed/feed.component";

const PostLoginPage = () => {
    const [feedContents, setFeedContents] = useState([])
    const [activeSearch, setActiveSearch] = useState(false)

    const onClick = () => {
        setActiveSearch(!activeSearch)
    }

    const buttonText = activeSearch ? 'Return to your Feed' : 'Check in your Cup'

    return (
        <div>
            <button onClick={onClick}>{buttonText}</button>
            {
                activeSearch ? (
                    <SearchPage />
                ) : (
                    <Feed feedContents={feedContents} setFeedContents={setFeedContents}/>
                )
            }
        </div>
    )
}

export default PostLoginPage