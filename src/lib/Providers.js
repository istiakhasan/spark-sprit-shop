"use client"
import {  store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
const Providers = ({ children }) => {
 persistStore(store) 
  return <>
   <Provider store={store}>
   {/* <PersistGate loading={<h1>Loading</h1>} persistor={persistor}> */}
    {children}
    {/* </PersistGate> */}
    </Provider>
   
   </>;
};

export default Providers;
