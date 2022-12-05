import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PreLoginPage from "../../components/pre-login-page/pre-login-page.component";
import PostLoginPage from "../../components/post-login-page/post-login-page.component";
import { UserContext } from "../../contexts/user.context";

const Home = () => {
    const {userExists, authenticatedUser} = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (userExists) {
            const userParam = authenticatedUser.displayName.split(' ').join('-').toLowerCase()
            navigate(`/${userParam}`)
        }
    }, [userExists])

    return (
        <Outlet />
    )
}

export default Home