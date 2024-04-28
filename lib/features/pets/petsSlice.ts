import { createSlice } from "@reduxjs/toolkit";

interface PetsSettings {
    requiresPets: string;
}


const initialState: PetsSettings = { requiresPets: "false" };

export const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        setPet: (state, action) => {
            state.requiresPets = action.payload;
        },
    },
});

export const { setPet } = petsSlice.actions;