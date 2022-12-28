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
        })
    })
})


export const {
    useGetSearchResultsQuery
} = apiService;