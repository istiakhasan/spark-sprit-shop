import { baseApi } from "./baseApi"


const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (query) => ({
        url: `/product/all-products`,
        method: "GET",
        params: { ...query }
      }),
      providesTags: ["product"]
    }),
    deleteProduct: build.mutation({
      query: (data) => ({
        url: `/product/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"]
    }),
    getSingleProduct: build.query({
      query: (data) => ({
        url: `/product/${data.id}`,
        method: "GET",
      }),
      providesTags: ["product"]
    }),
    getSimilarProduct: build.query({
      query: (data) => ({
        url: `/product/similar-product/${data.id}`,
        method: "GET",
      }),
      providesTags: ["product"]
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: `/product/create`,
        method: "POST",
        data
      }),
      invalidatesTags: ["product"]
    }),
    productGetByUserId: build.query({
      query: (data) => ({
        url: `/product/productById`,
        method: "GET"
      }),
      providesTags: ["product"]
    }),
  }),
})

export const { useGetAllProductsQuery, useDeleteProductMutation, useGetSingleProductQuery, useGetSimilarProductQuery, useCreateProductMutation,useProductGetByUserIdQuery } = productApi