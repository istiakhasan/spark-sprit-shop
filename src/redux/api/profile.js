import { baseApi } from './baseApi'

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPrifileInfo: build.query({
      query: (data) => ({
        url:'/user/profile',
        method:"GET",
      }),
      providesTags:['profile']
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url:'/user/profile',
        method:"PATCH",
        data
      }),
      invalidatesTags:['profile']
    }),
  }),
})

export const { useGetPrifileInfoQuery,useUpdateProfileMutation } = profileApi