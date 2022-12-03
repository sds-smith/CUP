import { useState  } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import './sign-in-form.styles.css'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action'

const SignInForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
        navigate('/')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
            navigate('/')
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name] : value })
    }
    
    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} /> 
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} /> 
                <ButtonsContainer >
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} >Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm