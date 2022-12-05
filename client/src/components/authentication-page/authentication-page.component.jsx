import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import {signInWithGooglePopup, signOutUser} from '../../utils/firebase/firebase.utils'


const AuthenticationPage = () => {
    const {setAuthenticatedUser, userExists} = useContext(UserContext)

    const navigate = useNavigate()

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
        navigate('/')
    }

    const buttonText = userExists ? 'SIGN OUT NOW' : 'SIGN IN WITH GOOGLE'

    return (
        <div>                
            <button className='SignInButton' onClick={signIn}>{buttonText}</button>
        </div>
    )
}

export default AuthenticationPage