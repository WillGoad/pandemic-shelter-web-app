import { createSlice } from "@reduxjs/toolkit";

interface LanguageSettings {
    currentLanguage: string;
    languageOptions: string[];
}


const initialState: LanguageSettings = {
    currentLanguage: "English",
    languageOptions: [
        "English",
        "French",
        "Spanish",
        "German",
    ]
};

export const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            if (state.languageOptions.includes(action.payload)) {
                state.currentLanguage = action.payload;
            }
        },
    },
});

export const { setLanguage } = languagesSlice.actions;