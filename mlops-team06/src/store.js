import { createStore } from "redux";
import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"

export default configureStore({
    reducer:{
        user:userReducer,
    }
})