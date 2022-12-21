import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../Constants';


const token = window.localStorage.getItem('token');

export const postApiService = createApi({
    reducerPath: 'postApiService',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({

        getPosts: builder.query({
            query: () => '/posts',
        }),


        getPaginatedPosts: builder.query({
            query: (page = 1) => `/p_posts?page=${page}`,
        }),


        getSelectedPosts: builder.query({
            query: (ids) => `/posts/multi/${ids}`,
        }),


        getMyPosts: builder.query({
            query: () => ({
                url: '/my/posts',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                }
            })
        }),


        getPost: builder.query({
            query: (id) => `/post/${id}`,
        }),


        deletePost: builder.mutation({
            query: (id) => ({
                url: `/post/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            })
        }),


        createPost: builder.mutation({
            query: (data) => ({
                url: '/post',
                method: 'POST',
                body: data,
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            })
        }),


        updatePost: builder.mutation({
            query: (data) => ({
                url: `/post/${data.id}`,
                method: 'PUT',
                body: data,
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            })
        }),


    })
})

export const {
    useGetMyPostsQuery,
    useGetPaginatedPostsQuery,
    useGetPostQuery,
    useGetSelectedPostsQuery,
    useGetPostsQuery,
    useCreatePostMutation,
    useDeletePostMutation,
} = postApiService;



