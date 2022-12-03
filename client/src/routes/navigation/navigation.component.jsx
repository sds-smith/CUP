import { Outlet } from "react-router-dom";

import {signInWithGooglePopup, signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.css'

const Navigation = ({setAuthenticatedUser, authenticatedUser}) => {

    const signIn = async () => {
        if (!authenticatedUser) {
            const {user} = await signInWithGooglePopup()
            setAuthenticatedUser({
                displayName: user.displayName,
                email: user.email
            })
        } else {
            await signOutUser()
            setAuthenticatedUser(null)
        }
    }

    const buttonLabel = authenticatedUser ? 'SIGN OUT' : 'SIGN IN'

    return (
        <div className='NavigationContainer'>
            <div className='Header'>
                <h1>CUP - cyber-sipping for Coffee Lovers</h1>
                <p>{authenticatedUser ? authenticatedUser.displayName : ''}</p>
                <button className='SignInButton' onClick={signIn}>{buttonLabel}</button>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation