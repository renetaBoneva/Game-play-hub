import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser, removeUser] = useLocalStorage('%user%', {});
    const [guest, setGuest, removeGuest] = useLocalStorage('%guest%', {});
    const navigate = useNavigate();

    async function onLoginHandler(loginData) {
        try {
            const user = await authService.login(loginData);
            // TODO: check if users's levels are bigger than unauthorized
            setUser(user);
            removeGuest();
            navigate('/catalog');

        } catch (err) {
            console.log(err);
        }

    }

    async function onRegisterHandler(registerData) {
        try {
            const user = await authService.register(registerData);
            setUser(user);
            removeGuest();
            navigate('/catalog');

        } catch (err) {
            console.log(err);
        }
    }

    async function onLogoutHandler() {
        try {
            await authService.logout();
            setGuest({});
            removeUser();
        } catch (err) {
            console.log(err);
        }
    }

    const context = {
        user,
        onLoginHandler,
        onRegisterHandler,
        onLogoutHandler,
        isAuthenticated: !!user.accessToken
    }

    return (
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>);

}