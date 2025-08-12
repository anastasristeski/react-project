import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export  function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] =  useState(false);
    useEffect(()=>{
            const token = localStorage.getItem('designMasterclassToken');
            if(token){
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            
        },[]);
        
        console.log(isLoggedIn, 'authprovider');
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
}


