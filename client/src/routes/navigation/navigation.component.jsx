import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import './navigation.styles.css'

const Navigation = () => {
    const { authenticatedUser, userExists } = useContext(UserContext)
    const navigate = useNavigate()

    const goToAuth = () => {
        navigate('/sign-in')
    }

    const buttonLabel = userExists ? 'SIGN OUT' : 'SIGN IN'

    return (
        <div className='NavigationContainer'>
            <div className='Header'>
                <h1>CUP - cyber-sipping for Coffee Lovers</h1>
                <p>{userExists ? authenticatedUser.displayName : ''}</p>
                <button className='SignInButton' onClick={goToAuth}>{buttonLabel}</button>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation