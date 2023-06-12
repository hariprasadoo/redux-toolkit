import {configureStore, PayloadAction, createSlice, createAction} from '@reduxjs/toolkit';
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state: string[], action: PayloadAction<string>) {
          state.push(action.payload);
        },
        removeMovie(state: string[], action: PayloadAction<string>) {
          const index = state.indexOf(action.payload);
          state.splice(index, 1);
        },
      // reset(state, action){
      //   return [];
      // }
    },
    extraReducers(builder){
      // builder.addCase('movie/reset', (state, action) =>{
      builder.addCase(reset, (state, action) =>{
        // state.push('New Song');
        return [];
      });
    }
  });

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;