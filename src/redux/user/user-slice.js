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
            // const {  } = action.payload.user;
            const user = action.payload.user;
            if (user) {
                return { ...user };
            }
            return state;
        },
        removeGuest(state) {
            return {};
        },
        onGamerLogout(state) {
            const { ...data } = state;
            return { data };
        }
    }
});

export const { addGuest, addGamer, removeGuest, onGamerLogout } = userSlice.actions;
export default userSlice.reducer;