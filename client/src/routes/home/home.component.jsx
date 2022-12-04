import { useContext } from "react";
import AuthenticationPage from "../../components/authentication-page/authentication-page.component";
import PostLoginPage from "../../components/post-login-page/post-login-page.component";
import { UserContext } from "../../contexts/user.context";

const Home = () => {
    const {userExists} = useContext(UserContext)

    return (
        <div>
            {
                userExists ? (
                    <PostLoginPage />
                ) : (
                    <AuthenticationPage/>
                )
            }
        </div>

    )
}

export default Home