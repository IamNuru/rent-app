import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: null,
    token: '',
    errorMessage:''
}




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register(state, action) {
            const user = action.payload.user;
            state.user = user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            window.localStorage.setItem('token', action.payload.token);
            state.errorMessage = '';
        },

        login(state, action) {
            const user = action.payload.user;
            state.user = user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            window.localStorage.setItem('token', action.payload.token);
            state.errorMessage = '';
        },


        logout(state) {
            // state = initialState;
            Object.assign(state, initialState);
            state.errorMessage = '';
        },

        authUser(state, action) {
            const user = action.payload.user;
            state.user = user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            window.localStorage.setItem('token', action.payload.token);
            state.errorMessage = '';
        },

        error(state, action){
            state.errorMessage = action.payload
        },

        clearErrorMessage(state){
            state.errorMessage = '';
            console.log('fired')
        }
    }

})

export const authActions = authSlice.actions;

export default authSlice.reducer;
