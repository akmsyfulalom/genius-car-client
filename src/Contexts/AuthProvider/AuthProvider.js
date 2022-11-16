import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config'



export const authContext = createContext();
const auth = getAuth(app)







const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const LogOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside user status', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, setLoading, createUser, userLogin, LogOut, providerLogin }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );

};

export default AuthProvider;