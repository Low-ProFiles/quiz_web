import { configureStore, createSlice } from '@reduxjs/toolkit';

interface QuizState {
  score: number;
  time: any;
}

const initialState: QuizState = {
  score: 0,
  time: [],
};

const QuizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    scoreHandler: state => {
      state.score += 1;
    },
    timeHandler: state => {
      state.time.push(Date.now());
    },
  },
});

export const { scoreHandler, timeHandler } = QuizSlice.actions;

export default configureStore({ reducer: QuizSlice.reducer });
