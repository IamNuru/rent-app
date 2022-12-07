import api from "../../utils/api";
import { authActions } from '../slices/authSlice';
import { uiActions } from "../slices/uiSlice";



export const login = (payload) => {
    return async dispatch => {
        dispatch(uiActions.loginLoading());
        const postData = async () => {
            const response = await api.post("/api/auth/login", payload);
            const data = await response.data;
            return data;
        };
        try {
            const user = await postData();
            await dispatch(authActions.login(user));
            dispatch(uiActions.loginLoading());
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                let errorMessage = error.message
                await dispatch(authActions.error(errorMessage));
            } else {
                await dispatch(authActions.error('Something went wrong, Please refresh page and try again'));
            }
            dispatch(uiActions.loginLoading());
        }
    }
};


export const getAuthenticatedUser = (token) => {
    return async dispatch => {

        const postData = async () => {
            const response = await api.get("/api/user", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            },);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            await dispatch(authActions.authUser(user));
        } catch (error) {
            console.log(error)
        }
    }
}




export const register = (payload) => {
    return async dispatch => {
        try {
            dispatch(uiActions.registerLoading())
            await api.get('/sanctum/csrf-cookie');

            const postData = async () => {
                const response = await api.post("/api/auth/register", payload);

                const data = await response.data;
                return data;
            };

            try {
                const user = await postData();
                await dispatch(authActions.register(user));
                dispatch(uiActions.registerLoading());
            } catch (error) {
                dispatch(uiActions.registerLoading());
            }
        } catch (error) {
            console.log('hmm')
            if (error.code === "ERR_NETWORK") {
                let errorMessage = error.message
                await dispatch(authActions.error(errorMessage));
            } else {
                await dispatch(authActions.error('Something went wrong, Please refresh page and try again'));
            }
            dispatch(uiActions.registerLoading());
        }
    }
};


export const logout = (token) => {
    return async dispatch => {
        await api.get('/sanctum/csrf-cookie');
        const logout = async () => {
            const response = await api.post('/api/auth/logout', null, {
                headers: {
                    Authorization: 'Bearer ' + token
                },
                withCredentials: true
            });
            const message = response.data;
            return message;
        };

        try {
            await logout();
            dispatch(authActions.logout());

        } catch (error) {
            console.log(error);
        }

    }
};

export const clearErrorMessages = () =>{
    return dispatch => {
        dispatch(authActions.clearErrorMessage())
    }
};