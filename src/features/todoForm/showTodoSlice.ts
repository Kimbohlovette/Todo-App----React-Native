import { createSlice } from '@reduxjs/toolkit';

const showTodoFormSlice = createSlice({
  name: 'showtodoform',
  initialState: { isOpen: false },
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
