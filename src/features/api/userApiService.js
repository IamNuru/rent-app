import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from '../../Constants';
const token = window.localStorage.getItem('token');


export const userApiService = createApi({
  reducerPath: 'userApiService',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: () => ({
        url: '/users',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: "application/json",
        }
      })
    }),


    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
        headers: {
          Accept: "application/json"
        }
      })
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
        headers: {
          Accept: "application/json"
        }
      })
    }),

    updateAuthUser: builder.mutation({
      query: (data) => ({
        url: '/auth/update',
        method: 'PATCH',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: "application/json"
        }
      })
    }),
    
    updateAuthUserProfilePhoto: builder.mutation({
      query: (data) => ({
        url: '/auth/update-profile-photo',
        method: 'PATCH',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: "application/json"
        }
      })
    }),

    getAuthUser: builder.query({
      query: () => ({
        url: '/user',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: "application/json",
        }
      })
    }),

    logUserOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: "application/json"
        }
      })
    }),


    sendMessage: builder.mutation({
      query: (message) => ({
        url: '/message',
        method: 'POST',
        body: message,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),

    
    getChatMessages: builder.query({
      query: (id) => ({
        url: `/messages/${id}`,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),


  }),
})

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAuthUserQuery,
  useLogUserOutMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateAuthUserMutation,
  useUpdateAuthUserProfilePhotoMutation,
  useSendMessageMutation,
  useGetChatMessagesQuery,
  
} = userApiService;