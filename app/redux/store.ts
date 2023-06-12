import {configureStore, PayloadAction, createSlice, createAction} from '@reduxjs/toolkit';

export const reset = createAction('app/reset')

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
      addMovie(state: string[], action: PayloadAction<string>) {
        state.push(action.payload);
      },
      removeMovies(state: string[], action: PayloadAction<string>) {
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

const songSlice = createSlice({
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
const store = configureStore({
  reducer:{
      songs: songSlice.reducer,
      movies: movieSlice.reducer
  }
});

export {store}
export const {addSong, removeSong} = songSlice.actions;
export const {addMovie, removeMovies} = movieSlice.actions;

// console.log(songSlice.actions.addSong("Some songs"))

// store.dispatch({
//     type:'song/addSong',
//     payload:'New Song'
// });

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));