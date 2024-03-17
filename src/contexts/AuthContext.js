import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'
import { toast } from "react-toastify";
import { stopLoading } from "../redux/loader/loader-slice";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser, removeUser] = useLocalStorage('%user%');
    const [guest, setGuest, removeGuest] = useLocalStorage('%guest%');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function onLoginHandler({ email, password }) {
        try {
            const loginData = { email, password };
            const user = await authService.login(loginData);

            // TODO: check if users's levels are bigger than unauthorized
            setUser(user);
            removeGuest();
            navigate('/catalog');
            dispatch(stopLoading());
        } catch (err) {
            dispatch(stopLoading());
            return toast.error('Incorrect email or password!');
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
        dispatch(stopLoading());
    }

    async function onRegisterHandler({ email, username, password, rePass }) {
        try {
            const registerData = { email, username, password, rePass };
            const user = await authService.register(registerData);

            setUser(user);
            removeGuest();
            navigate('/catalog');
            dispatch(stopLoading());
        } catch (err) {
            dispatch(stopLoading());
            return toast.error('Incorrect information!');
        }
    }

    async function onLogoutHandler() {
        try {
            // await authService.logout();
            removeUser();
            navigate('/userOrGuest');
            dispatch(stopLoading());
        } catch (err) {
            dispatch(stopLoading());
            return toast.error('Unauthorized!');
        }
    }

    

    const context = {
        user,
        guest,
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
