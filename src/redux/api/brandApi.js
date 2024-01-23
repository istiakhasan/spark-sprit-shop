import { baseApi } from "./baseApi"


const brandApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBrand: build.mutation({
      query: (data) => ({
          url:`/brand/create`,
          method:"POST",
          data
      }),
      invalidatesTags:["brand"]
    }),
    updateBrand: build.mutation({
      query: (data) => ({
          url:`/brand/${data?.id}`,
          method:"PATCH",
          data:data?.data
      }),
      invalidatesTags:["brand"]
    }),
    getAllBrand: build.query({
        query: () => ({
            url:`/brand/get-all`,
            method:"GET"
        }),
        providesTags:["brand"]
      }),

      getBrandById: build.query({
        query: (data) => ({
            url:`/brand/getbyid`,
            method:"GET",
            params:data
        }),
        providesTags:["brand"]
      }),

  }),
})

export const { useGetAllBrandQuery,useCreateBrandMutation,useGetBrandByIdQuery,useUpdateBrandMutation } = brandApi