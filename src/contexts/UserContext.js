import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignedOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('State changed, sign in');
                setUser(currentUser);
                setLoading(false);
            }
            else {
                console.log('State changed, sign out');
                setUser({});
                setLoading(false);
            }
        })
    }, [])
    console.log('user', user);

    const authInfo = {user, loading, createUser, logIn, userSignedOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;