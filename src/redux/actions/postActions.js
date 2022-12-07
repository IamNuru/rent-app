import api from "../../utils/api";
import { postActions } from '../slices/postSlice';
import { uiActions } from "../slices/uiSlice";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
      getPosts: builder.query({
        query: () => 'products',
      }),
    }),
  })
  
  export const { useGetPostsQuery } = postApi