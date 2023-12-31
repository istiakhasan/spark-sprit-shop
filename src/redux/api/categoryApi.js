import { baseApi } from "./baseApi"


const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
        query: (data) => ({
            url:`/category/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["category"]
      }),
    getAllCategory: build.query({
        query: (data) => ({
            url:`/category/get-all`,
            method:"GET",
            params:data
        }),
        providesTags:["category"]
      }),
    getCategoryById: build.query({
        query: (data) => ({
            url:`/category/getbyid`,
            method:"GET",
            params:data
        }),
        providesTags:["category"]
      }),

  }),
})

export const { useGetAllCategoryQuery,useGetCategoryByIdQuery,useCreateCategoryMutation } = categoryApi