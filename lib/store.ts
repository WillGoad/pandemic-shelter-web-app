import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./features/posts/postsSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postsSlice.reducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
    });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];