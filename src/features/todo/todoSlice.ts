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
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: state => {
      console.log(state);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
