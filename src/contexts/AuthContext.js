// import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    // const [auth, setAuth] = useState({});

    function onLoginHandler(loginData){
        console.log(loginData);
    }

    function onRegisterHandler(registerData){
        console.log(registerData);
    }

    const context= {
        // auth,
        onLoginHandler,
        onRegisterHandler,
    }

    return (
    <AuthContext.Provider value={context} >
        {children}
    </AuthContext.Provider>);

}