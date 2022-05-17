import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice";
import deviceReducer from "./slices/deviceSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        devices: deviceReducer
    },
})
