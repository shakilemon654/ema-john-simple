import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const {user, createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }

    if (user?.uid) {
        return <Navigate to='/shop' />;
    }

    return (
        <div className='w-full h-screen flex justify-center items-center -translate-y-10 p-4'>
            <form onSubmit={handleSignUp} className='w-9/12 sm:w-3/5 md:w-96 grid grid-cols-1 gap-y-4'>
                <h3 className='mb-1 text-center font-semibold text-2xl text-orange-400'>Sign Up</h3>
                
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>

                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confirm_password" />
                </div>

                <div>
                    <button className='uppercase bg-orange-400'>Sign Up</button>
                    <span className='text-sm text-gray-500 text-center block'>
                        Already in Ema-John? 
                        <Link to='/login' className='underline'> Log In</Link>
                    </span>
                </div>
            </form>   
        </div>
    );
};

export default SignUp;