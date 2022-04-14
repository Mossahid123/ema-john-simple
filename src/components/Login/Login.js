import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [email ,setEmail] =useState('');
    const [password , setPassword] =useState('');
    const [error , setError] =useState('');
    const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmail =event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    if (user){
        navigate('/shop')
    }
    const handleUserSingIn = event =>{
        event.preventDefult();
        signInWithEmailAndPassword(email , password)
    }
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>logIn</h3>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name='Email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name='Password' />
                    </div>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p>
                    New to ema-john?<Link className='form-link' to='/SingUp'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;