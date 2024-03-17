import { configureStore } from "@reduxjs/toolkit";

import loaderReducer from "./loader/loader-slice";

export const store = configureStore({
    reducer: {
        isLoading: loaderReducer
    }
})