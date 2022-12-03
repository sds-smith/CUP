import { useState } from "react";

import CheckInInput from "./components/check-in-input/check-in-input.component";
import Feed from "./components/feed/feed.component";

const App = () => {
    const [feedContents, setFeedContents] = useState([])

    return (
        <div>
            <h1>CUP - cyber-sipping for Coffee Lovers</h1>
            <CheckInInput setFeedContents={setFeedContents}/>
            <Feed feedContents={feedContents} setFeedContents={setFeedContents}/>
        </div>
    )
}

export default App