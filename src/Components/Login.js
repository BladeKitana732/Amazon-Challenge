import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../firebase';


function Login() {
    // setting new state 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // allows us to change url
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();

        // firebase integration begins
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const createAccount = e => {
        e.preventDefault();

        // firebase integration begins
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // made new user 
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        

    }

    return (
        <div className='login_container'>
          <Link to="/">
            <img className="login_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
          </Link>

          <div className="login_area">
            <h1>Sign in</h1>

            <form>
                <h4>E-mail</h4>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h4>Password</h4>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className="signInButton">Sign-in</button>
            </form>

            <p>Policy statement for signing in/up with my fake Amazon clone. You agree to all of them by trying it out. Thank you</p>

            <button onClick={createAccount} className="makeAccountButton">Create your Amazon Account</button>
          </div>


        </div>
    )
}

export default Login
