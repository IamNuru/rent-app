import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loginLoading: false,
    registerLoading: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        loginLoading(state) {
            state.loginLoading = !state.loginLoading;
        },
        registerLoading(state) {
            state.registerLoading = !state.registerLoading;
        },
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice.reducer;