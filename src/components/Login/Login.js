import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { user, loading, logIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.from.pathname || '/shop';
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
            navigate(from, {replace: true})

        })
        .catch(error => console.log(error))
    }

    console.log('loading', loading);
    if (loading) {
        return <div>Loading..........</div>
    }

    if (user && user.uid) {
        return <Navigate to={from} />;
    }
    
    return (
        <div className='w-full h-screen flex justify-center items-center -translate-y-10'>
            <form onSubmit={handleLogIn} className='w-9/12 sm:w-3/5 md:w-96 grid grid-cols-1 gap-y-4'>
                <h3 className='text-center font-semibold text-2xl text-orange-400'>Log In</h3>
                
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>

                <div>
                    <button className='uppercase bg-orange-400'>Log In</button>
                    <span className='text-sm text-gray-500 text-center block'>
                        New to Ema-John? 
                        <Link to='/signup' className='underline'> Create an account</Link>
                    </span>
                </div>

                <div>
                    <button className='bg-blue-400'>Sign In With Google</button>
                </div>
            </form>   
        </div>
    );
};

export default Login;