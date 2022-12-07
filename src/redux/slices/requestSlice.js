import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    requests:null,
    request:null,
}




const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        requests(state, action) {
            const requests = action.payload.requests;
            state.requests = requests;
        },
        request(state, action) {
            const request = action.payload.request;
            state.request = request;
        },
    }

})

export const requestActions = requestSlice.actions;

export default requestSlice.reducer;
