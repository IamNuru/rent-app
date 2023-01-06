import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../Constants';


const token = window.localStorage.getItem('token');

export const requestApiService = createApi({
    reducerPath: 'requestApiService',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({

        getRequests: builder.query({
            query: () => '/requests',
        }),


        getPaginatedRequests: builder.query({
            query: (page = 1) => `/p_requests?page=${page}`,
        }),


        getSelectedRequests: builder.query({
            query: (ids) => ({
                url: `/requests/multi/${ids}`,
                headers: {
                    Accept: "application/json",
                }
            })
        }),


        getMyRequests: builder.query({
            query: () => ({
                url: '/my/requests',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                }
            })
        }),


        getRequest: builder.query({
            query: (id, slug) => `/request/${id}/${slug}`,
        }),


        deleteRequest: builder.mutation({
            query: (id) => ({
                url: `/request/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            })
        }),


        createRequest: builder.mutation({
            query: (data) => ({
                url: '/request',
                method: 'POST',
                body: data,
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            })
        }),


        updateRequest: builder.mutation({
            query: (data) => ({
                url: `/request/${data.id}`,
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
    useGetMyRequestsQuery,
    useGetPaginatedRequestsQuery,
    useGetRequestQuery,
    useGetSelectedRequestsQuery,
    useGetRequestsQuery,
    useCreateRequestMutation,
    useDeleteRequestMutation,
    useUpdateRequestMutation,
} = requestApiService;



