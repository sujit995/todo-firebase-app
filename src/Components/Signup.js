import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, db } from '../Config/Config'


const Signup = (props) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerationError, setRegisterationError] = useState('');


    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('users').doc(cred.user.uid).set({
                Name: fullName,
                Email: email,
                Password: password
            }).then(() => {
                setFullName('');
                setEmail('');
                setPassword('');
                setRegisterationError('');
                props.history.push('/');
            }).catch(err => setRegisterationError(err.message))
        }).catch(err => setRegisterationError(err.message))
    }
    return (
        <div className='form-wrapper'>
            <div className="auth-wrapper">
                <div className="auth-inner mt-5">
                    <form onSubmit={handleRegister}>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Full name</label>
                            <input type="text" className="form-control mt-2" required
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                            />
                        </div>
                        <div className="form-group mt-2">
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
                        <button type="submit" className="btn btn-primary btn-block mt-4">Sign Up</button>
                        <p className="forgot-password text-right mt-4">
                            Already registered <Link to="login">sign in</Link>
                        </p>
                        {registerationError && <div className="error-msg">{registerationError}</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup