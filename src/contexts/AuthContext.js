import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useLocalStorage('%auth%', {});

    function onLoginHandler(loginData) {
        console.log(loginData);
    }

    function onRegisterHandler(registerData) {
        console.log(registerData);
    }

    const context = {
        auth,
        onLoginHandler,
        onRegisterHandler,
    }

    return (
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>);

}