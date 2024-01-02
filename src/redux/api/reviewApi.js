import { baseApi } from "./baseApi"


const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
        query: (data) => ({
            url:`/review/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["review"]
      }),
    getReviewByProductId: build.query({
        query: (data) => ({
            url:`/review/getbyProductid/${data?.id}`,
            method:"GET",
            params:data
        }),
        providesTags:["review"]
      }),
    getTotalRating: build.query({
        query: (data) => ({
            url:`/review/totalRating/${data?.id}`,
            method:"GET",
            params:data
        }),
        providesTags:["review"]
      }),

  }),
})

export const { useCreateReviewMutation,useGetReviewByProductIdQuery,useGetTotalRatingQuery} = reviewApi