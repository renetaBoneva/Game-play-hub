import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        addAuthUser(state, action) {
            return { ...state, ...action.payload };
        }
        // remove user
        // add guest
        // remove guest
    }
});

export const { addAuthUser: addUser } = userSlice.actions;
export default userSlice.reducer;