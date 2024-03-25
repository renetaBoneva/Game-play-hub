import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import * as authService from '../services/authService'
import { useLocalStorage } from "../hooks/useLocalStorage";
import { stopLoading } from "../redux/loader/loader-slice";
import { addGamer, addGuest, onGamerLogout } from "../redux/user/user-slice";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const userState = useSelector(state => state.user);
    const [userLS, setUser, removeUser] = useLocalStorage('%user%');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userLS && Object.keys({ userState }).length === 0) {
            authService.isValidAccessToken()
                .then((res) => {
                    const { _userID, email, username, accessToken } = res;
                    dispatch(addGamer({ _userID, email, username, accessToken }));
                })
                .catch((err) => {
                    localStorage.removeItem('%user%');
                    toast.error(err);
                });
        }
    });

    async function onLoginHandler({ email, password }) {
        try {
            const loginData = { email, password };
            const user = await authService.login(loginData);

            // TODO: check if users's levels are bigger than unauthorized
            dispatch(addGamer({ user }));
            setUser({ 'accessToken': user.accessToken });

            navigate('/catalog');
            dispatch(stopLoading());
        } catch (err) {
            dispatch(stopLoading());
            return toast.error('Incorrect email or password!');
        }
    }

    function onGuestRegistrationHandler({ username }) {
        dispatch(addGuest({ username }));
        removeUser();
        navigate('/catalog')
        dispatch(stopLoading());
    }

    async function onRegisterHandler({ email, username, password, rePass }) {
        try {
            const registerData = { email, username, password, rePass };
            const user = await authService.register(registerData);

            dispatch(addGamer({ user }));
            setUser({ 'accessToken': user.accessToken });
            navigate('/catalog');
            dispatch(stopLoading());
        } catch (err) {
            dispatch(stopLoading());
            return toast.error('Incorrect information!');
        }
    }

    function onLogoutHandler() {
        try {
            dispatch(onGamerLogout());
            removeUser();
            navigate('/userOrGuest');
            dispatch(stopLoading());
        } catch (err) {
            dispatch(stopLoading());
            return toast.error('Unauthorized!');
        }
    }

    const context = {
        userState,
        _userID: userState?._userID,
        username: userState.username,
        onLoginHandler,
        onGuestRegistrationHandler,
        onRegisterHandler,
        onLogoutHandler,
        isAuthenticated: !!userState?.accessToken,
        isUserOrGuest: !!userState.username
    }

    return (
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>);

}
