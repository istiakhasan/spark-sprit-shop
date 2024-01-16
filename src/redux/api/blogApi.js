import { baseApi } from "./baseApi"


const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlogCategory: build.mutation({
        query: (data) => ({
            url:`/blog-category/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["blog"]
      }),
    createBlog: build.mutation({
        query: (data) => ({
            url:`/blog/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["blog"]
      }),
    getAllBlogCategory: build.query({
        query: (data) => ({
            url:`/blog-category/get-all`,
            method:"GET",
            params:data
        }),
        providesTags:["blog"]
      }),
    getAllBlogs: build.query({
        query: (data) => ({
            url:`/blog/get-all`,
            method:"GET",
            params:data
        }),
        providesTags:["blog"]
      }),
      getblogbyid: build.query({
        query: (data) => ({
            url:`/blog/getblogbyid/${data?.id}`,
            method:"GET"
        }),
        providesTags:["blog"]
      }),
      loadAllBlogCategory: build.query({
        query: () => ({
            url:`/blog-category/loadAllBlogCategory`,
            method:"GET"
        }),
        providesTags:["bloglabel"]
      }),
    updateBlogCategory: build.mutation({
        query: (data) => ({
            url:`/blog-category/${data?.id}`,
            method:"PATCH",
            data:data?.data
        }),
        invalidatesTags:["blog"]
      }),
    updateBlog: build.mutation({
        query: (data) => ({
            url:`/blog/${data?.id}`,
            method:"PATCH",
            data:data?.data
        }),
        invalidatesTags:["blog"]
      }),
    insertComment: build.mutation({
        query: (data) => ({
            url:`/blog-comment/create`,
            method:"POST",
            data
        }),
        invalidatesTags:["blog"]
      }),
    getComment: build.query({
        query: (data) => ({
            url:`/blog-comment/getcommentbyblog/${data?.id}`,
            method:"GET",
        }),
        providesTags:["blog"]
      }),


  }),
})

export const { useCreateBlogCategoryMutation,useGetAllBlogCategoryQuery,useUpdateBlogCategoryMutation,useLoadAllBlogCategoryQuery,useCreateBlogMutation ,useGetAllBlogsQuery,useUpdateBlogMutation,useGetblogbyidQuery,useInsertCommentMutation,useGetCommentQuery} = blogApi