import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

const Home = () => {
    const { setAuthenticatedUser } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        const getSession = async () => {
            const session = await fetch('https://localhost:8000/v1/auth/get-session')
            const user = await session.json()
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