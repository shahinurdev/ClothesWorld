/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../components/firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error signing in:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            return await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
            throw error;
        }
    };

    const googleLogin = async () => {
        try {
            return await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error with Google sign in:", error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if(currentUser){
            setUser(currentUser);
            setLoading(false)
          }else{
            setLoading(false)
          }
         
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = { user, googleLogin, createUser, signIn, logout,loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
