import { createSlice } from '@reduxjs/toolkit';

const showTodoFormSlice = createSlice({
  name: 'showtodoform',
  initialState: { isOpen: true },
  reducers: {
    showTodoForm: state => {
      state.isOpen = true;
    },
    hideTodoForm: state => {
      state.isOpen = false;
    },
  },
});

export default showTodoFormSlice.reducer;

export const { showTodoForm, hideTodoForm } = showTodoFormSlice.actions;
