import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './store/slices/authSlice';
import uiReducer from './store/slices/uiSlice';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
    composeWithDevTools,
    reducer: {
        auth: authReducer,
        ui: uiReducer,
    },
    //middleware: getDefaultMiddleware => getDefaultMiddleware().concat([authBaseApi.middleware, unauthBaseApi.middleware])
});

setupListeners(store.dispatch);