import React from 'react';
import { Link } from '@reach/router';
import Liz from '../../assets/images/liz.jpg';
import './login.css';

const Login = () => {
    return(
        <div className='login'>
            <div className='login-left'>
                <img src={Liz} alt="" className='liz'/>
            </div>
            <div className='login-right'>
                <h1>Passion Studio</h1>
                <p><strong>Login</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</p>
                <form className='login-form'>
                    <label>Username</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                    <button className='login-button'>Login</button>
                </form>
                <div className='follow-up'>
                    <div className='logged-in'>
                        <input type="checkbox" id="logged" name="logged" value="Logged" />
                        <label for="logged">Keep me logged in</label>
                    </div>
                    <Link to="/forgot-password" className='forgot-password'>Forgot password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;