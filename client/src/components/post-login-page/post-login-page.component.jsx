import { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate, useParams } from 'react-router-dom'

import { UserContext } from "../../contexts/user.context";

const PostLoginPage = () => {
    const [activeSearch, setActiveSearch] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    const {userId} = params
    const {userExists} = useContext(UserContext)

    const onClick = () => {
        if (!activeSearch) {
            setActiveSearch(true)
            navigate(`search`)
        } else {
            setActiveSearch(false)
            navigate(`/${userId}`)
        }
    }

    const buttonText = activeSearch ? 'Return to your Feed' : 'Find your Cup'

    useEffect(() => {
        if (!userExists) {
            navigate('/')
        } else if (Object.keys(params).length === 1) {
            setActiveSearch(false)
        }
    }, [userExists, params])

    return (
        <div>
            <button onClick={onClick}>{buttonText}</button>
            <Outlet />
        </div>
    )
}

export default PostLoginPage