import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { httpSignOutUser } from "../../utils/http/requests"; 

import './navigation.styles.css'

const Navigation = () => {
    const { authenticatedUser, userExists, setAuthenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()

    const authAction = async () => {
        if (!authenticatedUser) {
            navigate('/sign-in')
        } else {
            await httpSignOutUser()
            setAuthenticatedUser(null)
        }
    }

    const buttonLabel = userExists ? 'SIGN OUT' : 'SIGN IN'

    return (
        <div className='NavigationContainer'>
            <div className='Header'>
                <h1>CUP - cyber-sipping for Coffee Lovers</h1>
                <p>{userExists ? authenticatedUser.displayName : ''}</p>
                <button className='SignInButton' onClick={authAction}>{buttonLabel}</button>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation