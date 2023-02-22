import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  todos: string[];
}

const initialState: InitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: state => {
      console.log(state);
    },
    removeTodo: state => {
      console.log(state);
    },
  },
});
