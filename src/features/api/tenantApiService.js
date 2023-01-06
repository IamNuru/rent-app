import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../Constants';


const token = window.localStorage.getItem('token');

export const tenantApiService = createApi({
    reducerPath: 'tenantApiService',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({

        getTenants: builder.query({
            query: () => '/tenants',
        }),


        getPaginatedTenants: builder.query({
            query: (page = 1) => `/p_tenants?page=${page}`,
        }),


        getSelectedTenants: builder.query({
            query: (ids) => `/tenants/multi/${ids}`,
        }),


        getMyTenants: builder.query({
            query: () => ({
                url: '/my/tenants',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                }
            })
        }),


        getTenant: builder.query({
            query: (id) => ({
                url: `/tenant/${id}`,
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                }
            })
        }),


        deleteTenant: builder.mutation({
            query: (id) => ({
                url: `/tenant/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
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
                    Accept: "application/json"
                }
            })
        }),


        updateTenant: builder.mutation({
            query: (data) => ({
                url: `/tenant/${data?.id}`,
                method: 'PATCH',
                body: data,
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json",
                }
            })
        }),


    })
})

export const {
    useGetMyTenantsQuery,
    useGetPaginatedTenantsQuery,
    useGetTenantQuery,
    useGetSelectedTenantsQuery,
    useGetTenantsQuery,
    useAddTenantMutation,
    useDeleteTenantMutation,
    useUpdateTenantMutation,
} = tenantApiService;



