import { configureStore, createSlice } from '@reduxjs/toolkit';

const score = createSlice({
  name: 'scoreReducer',
  initialState: [],
  reducers: {
    handleScore: (state: { score: any; }[], action: { payload: any; }) => {
      state.push({ score: action.payload });
    },
  },
});

const store = configureStore({ reducer: score.reducer });

export const { handleScore } = score.action;

export default store;
