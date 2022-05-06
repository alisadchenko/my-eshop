import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

function LoginForm() {
    const navigate = useNavigate();
    const emailinputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailinputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        
        setIsLoading(true);
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEaw6mc9nCFZwPjzYVwikbqvbChumbJZY';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEaw6mc9nCFZwPjzYVwikbqvbChumbJZY';
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {
            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
            authCtx.login(data.idToken, expirationTime.toISOString());
            navigate('/', { replace: true });
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    return (
        <div className="ui one column stackable centered page grid">
            <div className="column eight wide">
                <form className="ui form" onSubmit={submitHandler}>
                    <div className="ui hidden divider"></div>
                    <h1 className="ui dividing header">{isLogin ? 'Log In' : 'Sign Up'}</h1>
                    <div className="field">
                        <input name="userEmail" placeholder="Email" type="email" required ref={emailinputRef}/>
                    </div>
                    <div className="field">
                        <input name="userPassword" placeholder="Password" type="password" required ref={passwordInputRef}/>
                    </div>
                    <div className="ui hidden divider"></div>
                    {!isLoading && <button className="fluid ui primary button">{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <button className="fluid ui primary loading button"></button>}
                    <div className="ui hidden divider"></div>
                    <button 
                        type='button' 
                        className="fluid ui button" 
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;