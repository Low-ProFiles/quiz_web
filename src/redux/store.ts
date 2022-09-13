import { configureStore, createSlice } from '@reduxjs/toolkit';

interface QuizState {
  score: number;
  time: string;
}

const initialState: QuizState = {
  score: 0,
  time: '00:00',
};

const QuizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    scoreHandler: state => {
      state.score += 1;
    },
    timeHandler: state => {
      state.time += state;
    },
  },
});

export const { scoreHandler, timeHandler } = QuizSlice.actions;

export default configureStore({ reducer: QuizSlice.reducer });