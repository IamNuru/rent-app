import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './redux/slices/authSlice';
import uiReducer from './redux/slices/uiSlice';
import propertyReducer from './redux/slices/propertySlice';
import { composeWithDevTools } from "redux-devtools-extension";
import { apiService } from './features/api/apiService';
import { postApiService } from './features/api/postApiService';
import { propertyApiService } from './features/api/propertyApiService';
import { requestApiService } from './features/api/requestApiService';
import { tenantApiService } from './features/api/tenantApiService';
import { userApiService } from './features/api/userApiService';

export const store = configureStore({
    composeWithDevTools,
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        properties: propertyReducer,
        //[apiService.reducerPath]: apiService.reducer,
        [postApiService.reducerPath]: postApiService.reducer,
        [propertyApiService.reducerPath]: propertyApiService.reducer,
        [requestApiService.reducerPath]: requestApiService.reducer,
        [tenantApiService.reducerPath]: tenantApiService.reducer,
        [userApiService.reducerPath]: userApiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            propertyApiService.middleware,
            requestApiService.middleware,
            tenantApiService.middleware,
            postApiService.middleware,
            userApiService.middleware,
            apiService.middleware,
        ]),
    //middleware: getDefaultMiddleware => getDefaultMiddleware().concat([authBaseApi.middleware, unauthBaseApi.middleware])
});

setupListeners(store.dispatch);