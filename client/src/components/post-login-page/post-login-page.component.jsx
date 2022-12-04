import { useState } from "react";

import CheckInInput from "../check-in-input/check-in-input.component";
import SearchPage from "../search-page/search-page.component";
import Feed from "../feed/feed.component";

const PostLoginPage = ({authenticatedUser}) => {
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
            {/* <CheckInInput setFeedContents={setFeedContents} authenticatedUser={authenticatedUser} /> */}
        </div>
    )
}

export default PostLoginPage