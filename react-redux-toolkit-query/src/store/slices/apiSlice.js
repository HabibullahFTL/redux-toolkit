import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
        searchProducts: builder.query({
            query: (queryString) => `products/search?q=${queryString}`
        })
    })
})

export const { useGetAllProductsQuery, useSearchProductsQuery } = productsAPI