import { baseApi } from "./baseApi"


const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
        query: () => ({
            url:`/category/get-all`,
            method:"GET"
        }),
        providesTags:["category"]
      }),

  }),
})

export const { useGetAllCategoryQuery } = categoryApi