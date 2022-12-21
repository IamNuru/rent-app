import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: null,
    myProperties:null,
    myTenants:null,
    myRequests:null,
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
            const user = action?.payload?.user;
            state.user = user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            window.localStorage.setItem('token', action.payload.token);
            state.errorMessage = '';
        },

        myProperties(state, action){
            state.myProperties = action.payload
        },


        myTenants(state, action){
            state.myTenants = action.payload
        },

        
        myRequests(state, action){
            state.myRequests = action.payload
        },


        logout(state) {
            // state = initialState;
            Object.assign(state, initialState);
            window.localStorage.removeItem('token');
            state.errorMessage = '';
        },

        authUser(state, action) {
            const user = action.payload;
            state.user = user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.errorMessage = '';
        },

        error(state, action){
            state.errorMessage = action.payload
        },

        clearErrorMessage(state){
            state.errorMessage = '';
        }
    }

})

export const authActions = authSlice.actions;

export default authSlice.reducer;
