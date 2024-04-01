 
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
   
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
 

    // Observe auth state change

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current value of the current user',currentUser)
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
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