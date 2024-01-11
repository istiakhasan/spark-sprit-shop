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
  }),
})

export const { useGetPrifileInfoQuery } = profileApi