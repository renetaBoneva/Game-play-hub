import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser, removeUser] = useLocalStorage('%user%');
    const [guest, setGuest, removeGuest] = useLocalStorage('%guest%');
    const navigate = useNavigate();

    async function onLoginHandler({ email, password }) {
        try {
            const loginData = { email, password };
            const user = await authService.login(loginData);

            // TODO: check if users's levels are bigger than unauthorized
            setUser(user);
            removeGuest();
            navigate('/catalog');

        } catch (err) {
            console.log(err);
        }

    }

    function onGuestRegistrationHandler({ username }) {
        if (!user && !guest) {
            setGuest({ username });
        } else {
            removeUser();
            setGuest({ username });
        }
        navigate('/catalog')
    }

    async function onRegisterHandler({ email, username, password, rePass }) {
        try {
            const registerData = { email, username, password, rePass };
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
        onGuestRegistrationHandler,
        onRegisterHandler,
        onLogoutHandler,
        isAuthenticated: !!user?.accessToken,
        isUserOrGuest: !!user || !!guest
    }

    return (
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>);

}