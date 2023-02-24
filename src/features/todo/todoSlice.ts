import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  todos: string[];
}

const initialState: InitialState = {
  todos: [
    "Indicate that you're in space and upload task.",
    'Send feedback on dev trainees progress',
  ],
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
