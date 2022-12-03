import { Outlet } from "react-router-dom";

import './navigation.styles.css'

const Navigation = ({setAuthenticatedUser, authenticatedUser}) => {

    const signIn = () => {
        setAuthenticatedUser(!authenticatedUser)
    }

    const buttonLabel = authenticatedUser ? 'SIGN OUT' : 'SIGN IN'

    return (
        <div className='NavigationContainer'>
            <div className='Header'>
                <h1>CUP - cyber-sipping for Coffee Lovers</h1>
                <button className='SignInButton' onClick={signIn}>{buttonLabel}</button>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation