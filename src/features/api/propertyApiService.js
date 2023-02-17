import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../Constants';


const token = window.localStorage.getItem('token');

export const propertyApiService = createApi({
    reducerPath: 'propertyApiService',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({

        getProperties: builder.query({
            query: () => '/properties',
        }),


        getPaginatedProperties: builder.query({
            query: (page = 1) => `/p_properties?page=${page}`,
        }),


        getSelectedProperties: builder.query({
            query: (ids) => ({
                url: `/properties/multi/${ids}`,
                headers: {
                    Accept: "application/json",
                }
            })
        }),


        getMyProperties: builder.query({
            query: () => ({
                url: '/my/properties',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                }
            })
        }),


        getProperty: builder.query({
            query: (id) => `/property/${id}`,
        }),


        deleteProperty: builder.mutation({
            query: (id) => ({
                url: `/property/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
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
                    Accept: "application/json"
                }
            })
        }),
        

        updateProperty: builder.mutation({
            query: (data) => ({
              url: `/property/${data.id}`,
              method: 'PATCH',
              body: data,
              headers: {
                Authorization: 'Bearer ' + token,
                Accept : "application/json"
              }
            })
          }),


          addCategory: builder.mutation({
              query: (data) => ({
                  url: '/add-category',
                  method: 'POST',
                  body: data,
                  headers: {
                      Authorization: 'Bearer ' + token,
                      Accept: "application/json"
                  }
              })
          }),


          updateCategory: builder.mutation({
              query: (data) => ({
                  url: `/update-category/${data.id}`,
                  method: 'PATCH',
                  body: data,
                  headers: {
                      Authorization: 'Bearer ' + token,
                      Accept: "application/json"
                  }
              })
          }),

          
        getCategories: builder.query({
            query: () => '/categories',
        }),

        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            })
        }),

    })
})

export const {
    useGetMyPropertiesQuery,
    useGetPaginatedPropertiesQuery,
    useGetPropertyQuery,
    useGetSelectedPropertiesQuery,
    useGetPropertiesQuery,
    useDeletePropertyMutation,
    useAddPropertyMutation,
    useUpdatePropertyMutation,
    useAddCategoryMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = propertyApiService;



