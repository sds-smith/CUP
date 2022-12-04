
import AuthenticationPage from "../../components/authentication-page/authentication-page.component";
import PostLoginPage from "../../components/post-login-page/post-login-page.component";

const Home = ({authenticatedUser}) => {

    return (
        <div>
            {
                authenticatedUser ? (
                    <PostLoginPage authenticatedUser={authenticatedUser} />
                ) : (
                    <AuthenticationPage/>
                )
            }
        </div>

    )
}

export default Home