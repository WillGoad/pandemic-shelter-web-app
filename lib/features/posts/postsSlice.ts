import { createSlice } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const initialState: Post[] = [
    { id: '1', title: 'Help getting to shelter!!!', content: 'Content',date: '01-03-21'},
    { id: '2', title: 'Does shelter support dogs?', content: 'Content', date: '28-02-21'},
    { id: '3', title: 'Does shelter support cats?', content: 'Content', date: '29-02-21'},
    { id: '4', title: 'Does shelter support tortoise?', content: 'Content', date: '29-02-21'},
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;