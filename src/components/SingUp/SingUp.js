import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [email ,setEmail] =useState();
    const [password , setPassword] =useState();
    const [confirmPassword , setConfirmPassword] =useState();
    const [error , setError] =useState();

    const handleEmail =event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password!==confirmPassword){
            setError("your two password didn't match")
            return;
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sing Up</h3>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name='Email' required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name='Password' required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name='Confirm Password' required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john?<Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SingUp;