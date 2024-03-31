import { createSlice } from "@reduxjs/toolkit";

interface Shelter {
  id: string;
  name: string;
  price: number;
  distance: number;
  doesSupportPets: boolean;
}

const initialState: Shelter[] = [
    { id: '1', name: 'Mile End Shelter', price: 3, distance: 12, doesSupportPets: true},
    { id: '2', name: 'Bethnal Green Shelter', price: 2, distance: 2, doesSupportPets: false},
    { id: '3', name: 'Whitechapel Shelter', price: 8, distance: 30, doesSupportPets: false},
    { id: '4', name: 'Farringdon Shelter', price: 15, distance: 4, doesSupportPets: true},
    { id: '5', name: 'Oxford Circus Shelter', price: 25, distance: 8, doesSupportPets: true},
    { id: '6', name: 'Peoples Palace Shelter', price: 4, distance: 7, doesSupportPets: true},
];

export const sheltersSlice = createSlice({
  name: 'shelters',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = sheltersSlice.actions;