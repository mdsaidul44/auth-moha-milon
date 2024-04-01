 
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
   
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading ,setLoading] =useState(true)


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
        
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
 

    // Observe auth state change

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{ 
            console.log('current value of the current user',currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        loading,
        user,
        signInWithGoogle,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes ={
    children: PropTypes.node
}
 


/**
 * 1.Create context and export it.
 * 2.set Provider with value
 * 3.use the auth provider in the main jsx file.
 * 4. access children in the authProvider component as children and use it in the middle of the provider.
 * */ 