import { baseApi } from "./baseApi"


const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
        query: (data) => ({
            url:`/order/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["order"]
      })

  }),
})

export const { useCreateOrderMutation } = orderApi