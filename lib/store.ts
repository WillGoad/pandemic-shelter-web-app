import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./features/posts/postsSlice";
import { updatesSlice } from "./features/updates/updatesSlice";
import { sheltersSlice } from "./features/shelters/sheltersSlice";
import { languagesSlice } from "./features/languages/languagesSlice";
import { feedbackSlice } from "./features/feedback/feedbackSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postsSlice.reducer,
            updates: updatesSlice.reducer,
            shelters: sheltersSlice.reducer,
            languages: languagesSlice.reducer,
            feedback: feedbackSlice.reducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
    });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];