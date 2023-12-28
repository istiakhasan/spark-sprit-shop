import { baseApi } from "./baseApi"


const brandApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBrand: build.query({
        query: () => ({
            url:`/brand/get-all`,
            method:"GET"
        }),
        providesTags:["brand"]
      }),

  }),
})

export const { useGetAllBrandQuery } = brandApi