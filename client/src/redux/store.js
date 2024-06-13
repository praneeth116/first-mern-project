import {configureStore} from "@reduxjs/toolkit";
//Importing the reducer
import userReducer from "./user/userSlice.js";

export const store = configureStore({
    reducer:{user: userReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false,
    }),
});
