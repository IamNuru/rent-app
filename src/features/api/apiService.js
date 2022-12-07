import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = window.localStorage.getItem('token');


export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api'  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getProperties: builder.query({
      query: () => `/properties`,
    }),
    getRequests: builder.query({
      query: () => '/requests',
    }),


    getPaginatedPosts: builder.query({
      query: (page = 1) => `/p_posts?page=${page}`,
    }),
    getPaginatedProperties: builder.query({
      query: (page = 1) => `/p_properties?page=${page}`,
    }),
    getPaginatedRequests: builder.query({
      query: (page = 1) => `/p_requests?page=${page}`,
    }),


    getSelectedPosts: builder.query({
      query: (ids) => `/posts/multi/${ids}`,
    }),
    getSelectedProperties: builder.query({
      query: (ids) => `/properties/multi/${ids}`,
    }),
    getSelectedRequests: builder.query({
      query: (ids) => `/requests/multi/${ids}`,
    }),


    getUsers: builder.query({
      query: () => ({
        url: '/users',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json",
        }
      })
    }),


    getMyPosts: builder.query({
      query: () => ({
        url: '/my/posts',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json",
        }
      })
    }),

    getMyProperties: builder.query({
      query: (tok) => ({
        url: '/my/properties',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json",
        }
      })
    }),


    getMyRequests: builder.query({
      query: (tok) => ({
        url: '/my/requests',
        headers: {
          Authorization: 'Bearer ' + tok,
          Accept : "application/json",
        }
      })
    }),
    getMyTenants: builder.query({
      query: (tok) => ({
        url: '/my/tenants',
        headers: {
          Authorization: 'Bearer ' + tok,
          Accept : "application/json",
        }
      })
    }),
    getTenant: builder.query({
      query: (id) => ({
        url: `/tenant/${id}`,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json",
        }
      })
    }),



    getProperty: builder.query({
      query: (id) => `/property/${id}`,
    }),
    getPost: builder.query({
      query: (id) => `/post/${id}`,
    }),
    getRequest: builder.query({
      query: (id, slug) => `/request/${id}/${slug}`,
    }),


    

    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
        headers: {
          Accept : "application/json"
        }
      })
    }),
    
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
        headers: {
          Accept : "application/json"
        }
      })
    }),

    getAuthUser: builder.query({
      query: (tok) => ({
        url: '/user',
        headers: {
          Authorization: 'Bearer ' + tok,
          Accept : "application/json",
        }
      })
    }),

    logUserOut : builder.mutation({
      query: (token) => ({
        url: '/logout',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),
    

    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/property/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),
    
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),
    deleteRequest: builder.mutation({
      query: (id) => ({
        url: `/request/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),
    
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),
    
    deleteTenant: builder.mutation({
      query: (id) => ({
        url: `/tenant/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),
    
    
    postRequest: builder.mutation({
      query: (request) => ({
        url: '/request',
        method: 'POST',
        body: request,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
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

    

    createPost: builder.mutation({
      query: (data) => ({
        url: '/post',
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),

    addTenant: builder.mutation({
      query: (data) => ({
        url: '/tenant',
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),


    updateTenant: builder.mutation({
      query: (data) => ({
        url: `/tenant/${data.id}`,
        method: 'PUT',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),


    addProperty: builder.mutation({
      query: (data) => ({
        url: '/property',
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),

    updateProperty: builder.mutation({
      query: (data) => ({
        url: `/property/${data.id}`,
        method: 'PUT',
        body: data,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept : "application/json"
        }
      })
    }),

  }),
})

export const {
  useGetPostsQuery,
  useGetPropertiesQuery,
  useGetRequestsQuery,
  useGetPostQuery,
  useGetRequestQuery,
  useGetPropertyQuery,
  usePostRequestMutation,
  useCreatePostMutation,
  useAddPropertyMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAuthUserQuery,
  useLogUserOutMutation,
  useDeletePostMutation,
  useDeletePropertyMutation,
  useDeleteRequestMutation,
  useGetMyPostsQuery,
  useGetMyPropertiesQuery,
  useGetMyRequestsQuery,
  useGetMyTenantsQuery,
  useGetSelectedPostsQuery,
  useGetSelectedPropertiesQuery,
  useGetSelectedRequestsQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useSendMessageMutation,
  useGetChatMessagesQuery,
  useUpdatePropertyMutation,
  useAddTenantMutation,
  useDeleteTenantMutation,
  useGetTenantQuery,
  useUpdateTenantMutation,
  getPaginatedPosts,
  getPaginatedProperties,
  getPaginatedRequests,
} = apiService;