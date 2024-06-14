import {combineReducers, configureStore} from "@reduxjs/toolkit";
//Importing the reducer
import userReducer from "./user/userSlice.js";
//Import persistReducer and persistStore
import {persistReducer, persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";


//We combine all the reducers and get the root reducer.
const rootReducer = combineReducers({user: userReducer});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    //reducer:{user: userReducer},
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
