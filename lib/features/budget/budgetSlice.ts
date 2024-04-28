import { createSlice } from "@reduxjs/toolkit";

interface BudgetSettings {
    budget: number;
}

const initialState: BudgetSettings = {budget: 10};

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setBudget: (state, action) => {
            state.budget = action.payload;
        },
    },
});

export const { setBudget } = budgetSlice.actions;