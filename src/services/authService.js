import { requester } from "./requester";

export const login = async (loginData) => requester.post('/login', loginData);

export const register = async (registerData) => requester.post('/register', registerData);