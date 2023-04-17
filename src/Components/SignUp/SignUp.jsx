import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import './SignUP.css'
const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        setError('');
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }


    return (
        <div className='form-container'>
            <h1 className='from-title'>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;