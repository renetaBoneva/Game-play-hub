import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useLocalStorage('%auth%', {});
    const navigate = useNavigate();

    async function onLoginHandler(loginData) {
        try {
            const user = await authService.login(loginData);
            setAuth(user)
            navigate('/catalog');

        } catch (err) {
            console.log(err);
        }

    }

    async function onRegisterHandler(registerData) {
        try {
            const user = await authService.register(registerData);
            setAuth(user)
            navigate('/catalog');

        } catch (err) {
            console.log(err);
        }
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