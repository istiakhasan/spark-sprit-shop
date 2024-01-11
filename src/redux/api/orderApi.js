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
      }),
      orderGetByUserId: build.query({
        query: (data) => ({
          url: `/order/getOrderById`,
          method: "GET",
          params:data
        }),
        providesTags: ["order"]
      }),
      getAllOrders: build.query({
        query: (data) => ({
          url: `/order/getAllOrders`,
          method: "GET",
          params:data
        }),
        providesTags: ["order"]
      }),
      updateOrderStatus: build.mutation({
        query: (data) => ({
            url:`/order/updatestatus/${data?.id}`,
            method:"PATCH",
            params:data?.params
        }),
        invalidatesTags:["order"]
      }),

  }),
})

export const { useCreateOrderMutation,useOrderGetByUserIdQuery,useGetAllOrdersQuery,useUpdateOrderStatusMutation } = orderApi