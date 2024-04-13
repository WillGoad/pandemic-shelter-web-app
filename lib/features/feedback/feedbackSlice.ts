import { createSlice } from "@reduxjs/toolkit";

interface Feedback {
  id: string;
  title: string;
  content: string;
  date: string;
}

const initialState: Feedback[] = [
    { id: '1', title: 'My feedback', content: 'Content',date: '01-03-21'},
    { id: '2', title: 'More feedback', content: 'Content', date: '28-02-21'},
];

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFeedback} = feedbackSlice.actions;