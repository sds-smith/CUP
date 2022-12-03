import { useState } from "react";

import CheckInInput from '../../components/check-in-input/check-in-input.component'
import Feed from "../../components/feed/feed.component";

const Home = ({authenticatedUser}) => {
    const [feedContents, setFeedContents] = useState([])

    const preLogin = (
        <div>Please Sign In</div>
    )

    const postLogin = (
        <div>
            <CheckInInput setFeedContents={setFeedContents} authenticatedUser={authenticatedUser} />
            <Feed feedContents={feedContents} setFeedContents={setFeedContents}/>
        </div>
    )

    return (
        <div>
            {
                authenticatedUser ? postLogin : preLogin
            }
        </div>

    )
}

export default Home