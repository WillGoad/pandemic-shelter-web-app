import { createSlice } from "@reduxjs/toolkit";

interface Update {
    id: string;
    title: string;
    content: string;
    date: string;
    isEmergency: boolean;
}

const initialState: Update[] = [
    { id: '1', title: 'Exposure Alert', content: 'Content', date: '20-01-21', isEmergency: true },
    { id: '2', title: 'New Quarantine Protocol', content: 'Content', date: '28-02-21', isEmergency: false },
    { id: '3', title: 'Incident Report 25-02-21', content: 'Content', date: '25-02-21', isEmergency: false },
    { id: '4', title: 'Incident Report 01-03-21', content: 'Content', date: '01-03-21', isEmergency: false },
];

export const updatesSlice = createSlice({
    name: 'updates',
    initialState,
    reducers: {
        addUpdate: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addUpdate } = updatesSlice.actions;