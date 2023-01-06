import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../Constants";

export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({baseUrl : API_URL }),
    endpoints: (builder) =>({
        getSearchResults: builder.query({
            query:(term) => ({
                url: `/search/${term}`,
                method: 'GET'
            })
        }),
        getStatistics: builder.query({
            query:(term) => ({
                url: `/statistics`,
                method: 'GET'
            })
        }),
        contactUs: builder.mutation({
            query: (data) => ({
                url: '/contact-us',
                method: 'POST',
                body: data,
                headers: {
                    Accept: "application/json"
                }
            })
        })
    })
})


export const {
    useGetSearchResultsQuery,
    useGetStatisticsQuery,
    useContactUsMutation,
} = apiService;