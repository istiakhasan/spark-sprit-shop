import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartSlice from './slice/cartSlice'
import querySlice from './slice/querySlice'
export const store = configureStore({
  reducer: {
    cartSlice:cartSlice,
    querySlice:querySlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),
})