import { useState } from 'react';

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };

    return (
        <div class="ui one column stackable centered page grid">
            <div class="column eight wide">
                <form class="ui form">
                    <p class="ui dividing header">1) centered</p>
                    <div class="ui hidden divider"></div>
                    <h1 class="ui dividing header">{isLogin ? 'Log In' : 'Sign Up'}</h1>
                    <div class="field">
                        <input name="userEmail" placeholder="Email" type="email" required />
                    </div>
                    <div class="field">
                        <input name="userPassword" placeholder="Password" type="password" required />
                    </div>
                    <div class="ui hidden divider"></div>
                    <button class="fluid ui primary button">{isLogin ? 'Login' : 'Create Account'}</button>
                    <div class="ui hidden divider"></div>
                    <button 
                        type='button' 
                        class="fluid ui primary button" 
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;