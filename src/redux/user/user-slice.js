import { createSlice } from "@reduxjs/toolkit";

const initUser = {};

const userSlice = createSlice({
    name: 'userState',
    initialState: initUser,
    reducers: {
        addGuest(state, action) {
            return { 'username': action.payload.username };
        },
        addGamer(state, action) {
            const user = action.payload.user;
            if (user) {
                const { _userID, email, username, accessToken } = user;
                const newState = { _userID, email, username, accessToken };
                return newState;
            }
            return state;
        },
        onGamerLogout(state) {
            return {};
        },
    }
});

export const { addGuest, addGamer, onGamerLogout } = userSlice.actions;
export default userSlice.reducer;