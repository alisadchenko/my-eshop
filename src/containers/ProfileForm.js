import { useRef, useContext } from "react";
import AuthContext from "../store/auth-context";

const ProfileForm = () => {
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);

    const submitHandler = event => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDEaw6mc9nCFZwPjzYVwikbqvbChumbJZY', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {

        });
    };

    return (
        <div className="ui one column stackable centered page grid">
            <div className="column eight wide">
                <form className="ui form" onSubmit={submitHandler}>
                    <div className="ui hidden divider"></div>
                    <h1 className="ui dividing header">User Profile</h1>
                    <div className="ui hidden divider"></div>
                    <h4 htmlFor="new-password">New Password</h4>
                    <div className="field">
                        <input name="userPassword" placeholder="Password" type="password" minLength="7" ref={newPasswordInputRef}/>
                    </div>
                    <div className="ui hidden divider"></div>
                    <button className="fluid ui primary button">Change Password</button>
                    <div className="ui hidden divider"></div>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;