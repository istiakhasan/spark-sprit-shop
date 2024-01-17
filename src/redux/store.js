import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartSlice from './slice/cartSlice'
import querySlice from './slice/querySlice'
import gridViweSlice from './slice/gridViewSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from './customStorage';
// import storage from 'redux-persist/lib/storage';



const rootReducer=combineReducers({
  cartSlice:cartSlice,
  querySlice:querySlice,
  gridSlice:gridViweSlice,
  [baseApi.reducerPath]: baseApi.reducer,
})



const persistConfig = {
  key: "root",
  storage:storage,
   blacklist: ['querySlice']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
})


export  const  persistor = persistStore(store);