import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts:null,
    post:null,
}




const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        posts(state, action) {
            const posts = action.payload.posts;
            state.posts = posts;
        },
        post(state, action) {
            const post = action.payload.post;
            state.post = post;
        },
    }

})

export const postActions = postSlice.actions;

export default postSlice.reducer;
