import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    isAuthenticated: boolean;
    userInfo: {
        name: string;
        email: string;
        address?: string;
    } | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ name: string; email: string; address?: string }>) {
            state.isAuthenticated = true;
            state.userInfo = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.userInfo = null;
        },
        updateUser(state, action: PayloadAction<{ name?: string; email?: string; address?: string }>) {
            if (state.userInfo) {
                state.userInfo = { ...state.userInfo, ...action.payload };
            }
        },
    },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;