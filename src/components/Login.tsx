// imports
import React from 'react'
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Button from '@material-ui/core/Button';
import '../css/Login.css';
import { 
    auth,
    provider 
} from '../firebase';
import { 
    actionTypes 
} from '../reducer';
import { 
    useStateValue 
} from '../StateProvider';

// interface
interface Props{

}

// component
const Login: React.FC<Props> = () => {
    // using the custom hook to use the context
    const [state, dispatch] = useStateValue();

    // using the authentication from firebase
    const SignIn = () => {
        auth.signInWithPopup(provider)
        .then(
            result => 
            {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result.user);
        }
        )
        .catch(
            err => 
            alert(err.message)
        );
    }

    // template
    return (
        <div
        className='login'
        >
            <div
            className='login__logoContainer'
            >
            <BubbleChartIcon 
            className='login__logo'
            />
            <h2
            className='login__text'
            >
                Facedash
            </h2>
            </div>
            <Button
            className='login__btn'
            type='submit'
            onClick={SignIn}
            >
                Sign in
            </Button>
        </div>
    )
}

export default Login;
