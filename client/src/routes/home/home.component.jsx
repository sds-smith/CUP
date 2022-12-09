import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { httpGetSession } from "../../utils/http/requests";

const Home = () => {
    const { setAuthenticatedUser } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        const getSession = async () => {
            const user = await httpGetSession();
            if (user) {
                setAuthenticatedUser(user)
                const userParam = user.displayName.split(' ').join('-').toLowerCase()
                navigate(`/${userParam}`)
            }
        }
        getSession()
    }, [])

    return (
        <Outlet />
    )
}

export default Home