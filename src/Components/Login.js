import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setLoginError('');
            props.history.push('/');
        }).catch(err => setLoginError(err.message))
    }

    // const forgotPassword = (Email) => {
    //     auth.sendPasswordResetEmail(Email)
    //         .then(function () {
    //             alert('Please check your email...')
    //         }).catch(function (e) {
    //             console.log(e)
    //         })
    // }

    return (
        <div className='form-wrapper'>
            <div className="auth-wrapper">
                <div className="auth-inner mt-5">
                    <form onSubmit={handleLogin}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control mt-2"
                                required onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div className="form-group mt-2">
                            <label>Password</label>
                            <input type="password" className="form-control mt-2"
                                required onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-4 mb-4">Submit</button>
                        {/* <p className="forgot-password text-right mt-2">
                            Forgot <a href="" onClick={() => forgotPassword(toString(profile.email))}>password?</a>
                        </p> */}
                    </form>
                    <span>Don't have an account? Create One
                        <Link to="signup"> here</Link></span>
                    {loginError && <div className='error-msg'>
                        {loginError}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Login