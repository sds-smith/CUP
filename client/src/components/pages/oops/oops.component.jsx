
import { useNavigate } from "react-router-dom";

const Oops = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Oops! Something went wrong with Log In!</h1>
            <button onClick={onClick} >RETURN TO HOME</button>
        </div>
    )
}

export default Oops