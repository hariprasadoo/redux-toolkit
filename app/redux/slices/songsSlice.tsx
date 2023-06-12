import {configureStore, PayloadAction, createSlice, createAction} from '@reduxjs/toolkit';
import { reset } from "../actions";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
      addSong(state: any[], action: PayloadAction<string>) {
        state.push(action.payload);
      },
      removeSong(state:any[], action: PayloadAction<string>) {
        // Implementation for removeSong
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      }
    },
    extraReducers(builder){
      // builder.addCase('movie/reset', (state, action) =>{
      builder.addCase(reset, (state, action) =>{
        // state.push('New Song');
        return [];
      });
    }
  });

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;