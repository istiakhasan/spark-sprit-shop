import axios from 'axios'
import { instance } from './axiosInstance'

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await instance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers:{
          "Content-Type": contentType || "application/json"
        },
        withCredentials: true,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

