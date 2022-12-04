import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import {signInWithGooglePopup, signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.css'

const Navigation = () => {
    const {setAuthenticatedUser, authenticatedUser, userExists} = useContext(UserContext)

    const signIn = async () => {
        if (!userExists) {
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

    const buttonLabel = userExists ? 'SIGN OUT' : 'SIGN IN'

    return (
        <div className='NavigationContainer'>
            <div className='Header'>
                <h1>CUP - cyber-sipping for Coffee Lovers</h1>
                <p>{userExists ? authenticatedUser.displayName : ''}</p>
                <button className='SignInButton' onClick={signIn}>{buttonLabel}</button>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation