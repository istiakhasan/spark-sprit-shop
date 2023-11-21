import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartSlice from './slice/cartSlice'
export const store = configureStore({
  reducer: {
    cartSlice:cartSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),
})