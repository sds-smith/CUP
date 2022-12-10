import { useEffect, useContext } from "react";
import { Outlet, useNavigate, useParams } from 'react-router-dom'

import { UserContext } from "../../../contexts/user.context";
import { CheckInContext } from "../../../contexts/check-in.context";

const PostLoginPage = () => {

    const navigate = useNavigate()
    const {userId} = useParams()
    const {userExists, authenticatedUser} = useContext(UserContext);
    const {activeSearch, setActiveSearch} = useContext(CheckInContext)

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
        } 
    }, [userExists])

    return (
        <div>
            <button onClick={onClick}>{buttonText}</button>
            <Outlet />
        </div>
    )
}

export default PostLoginPage