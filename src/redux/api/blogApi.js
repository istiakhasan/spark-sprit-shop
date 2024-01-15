import { baseApi } from "./baseApi"


const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlogCategory: build.mutation({
        query: (data) => ({
            url:`/blog-category/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["blog"]
      }),
    getAllBlogCategory: build.query({
        query: (data) => ({
            url:`/blog-category/get-all`,
            method:"GET",
            params:data
        }),
        providesTags:["blog"]
      }),
    updateBlogCategory: build.mutation({
        query: (data) => ({
            url:`/blog-category/${data?.id}`,
            method:"PATCH",
            data:data?.data
        }),
        invalidatesTags:["blog"]
      }),


  }),
})

export const { useCreateBlogCategoryMutation,useGetAllBlogCategoryQuery,useUpdateBlogCategoryMutation } = blogApi