import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import showTodoFormReducer from '../features/todoForm/showTodoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    showForm: showTodoFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
