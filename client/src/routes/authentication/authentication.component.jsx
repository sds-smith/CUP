
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import './authentication.styles.css'


const SignIn = () => {
    return (
        <div className="AuthenticationContainer" >
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn