import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const activeStyle = {color: '#FF9900'};
    const {user, userSignedOut} = useContext(AuthContext);

    const handleSignOut = () => {
        userSignedOut()
        .then(() => {
            console.log('Successfully signed out');
            
        })
        .catch((error) => {
            console.log('sign out error', error);
        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div>
                <NavLink to='/shop' className='link'
                style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Shop
                </NavLink>
                <NavLink to='/orders' className='link'
                style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Orders
                </NavLink>
                <NavLink to='/inventory' className='link'
                style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    Inventory
                </NavLink>
                <NavLink to='/about' className='link'
                style={({isActive}) => isActive ? activeStyle : undefined}
                >
                    About
                </NavLink>
                {
                    user?.email ?
                        <NavLink className='link'
                        style={({isActive}) => isActive ? activeStyle : undefined}
                        onClick={handleSignOut}
                        >
                            Sign Out
                        </NavLink>
                        :
                        <>
                            <NavLink to='/login' className='link'
                            style={({isActive}) => isActive ? activeStyle : undefined}
                            >
                                Login
                            </NavLink>
                            <NavLink to='/signup' className='link'
                            style={({isActive}) => isActive ? activeStyle : undefined}
                            >
                                Sign Up
                            </NavLink>
                        </>
                }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;