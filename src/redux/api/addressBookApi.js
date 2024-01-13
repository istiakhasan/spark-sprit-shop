import { baseApi } from "./baseApi"


const addressBookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAddress: build.mutation({
      query: (data) => ({
          url:`/address-book/create`,
          method:"POST",
          data
      }),
      invalidatesTags:["addressbook"]
    }),
    updateAddress: build.mutation({
      query: (data) => ({
          url:`/address-book/update`,
          method:"PATCH",
          data
      }),
      invalidatesTags:["addressbook"]
    }),
    // getAllBrand: build.query({
    //     query: () => ({
    //         url:`/brand/get-all`,
    //         method:"GET"
    //     }),
    //     providesTags:["brand"]
    //   }),

      getAddressById: build.query({
        query: () => ({
            url:`/address-book/getbyid`,
            method:"GET"
        }),
        providesTags:["addressbook"]
      }),

  }),
})

export const { useCreateAddressMutation,useGetAddressByIdQuery,useUpdateAddressMutation } = addressBookApi