import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import {httpSignInWithGooglePassport, httpSignOutUser} from '../../utils/http/requests'


const AuthenticationPage = () => {
    const {setAuthenticatedUser, userExists} = useContext(UserContext)

    const navigate = useNavigate()

    const signIn = async () => {
        if (!userExists) {
            // const user = await httpSignInWithGooglePassport()
            navigate('/v1/auth/google')
            // setAuthenticatedUser({
                // displayName: user.displayName,
                // email: user.email
            // })
        } else {
            const msg = await httpSignOutUser()
            console.log(msg)
            setAuthenticatedUser(null)
        }
        navigate('/')
    }

    const buttonText = userExists ? 'SIGN OUT NOW' : 'SIGN IN WITH GOOGLE'

    return (
        <div>                

            <Outlet />
        </div>
    )
}

export default AuthenticationPage