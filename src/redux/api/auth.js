import { baseApi } from './baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => ({
        url:'/user/login',
        method:"POST",
        data
      }),
      invalidatesTags:['user']
    }),
    signUpUser: build.mutation({
      query: (data) => ({
        url:'/user/create',
        method:"POST",
        data
      }),
      invalidatesTags:['user']
    }),
  }),
})

export const { useLoginUserMutation,useSignUpUserMutation } = authApi