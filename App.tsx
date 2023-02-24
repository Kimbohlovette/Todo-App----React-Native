/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from 'react';
import { FlatList, Pressable, StatusBar, Text, View } from 'react-native';
import AddTodoForm from './src/components/AddNewTodo';
import { useAppSelector, useAppDispatch } from './src/app/hooks/index';
import { Todo } from './src/features/todo/Todo';
import { showTodoForm } from './src/features/todoForm/showTodoSlice';
// import { MdTipsAndUpdates } from 'react-icons/md';

const App = () => {
  const todos = useAppSelector(state => state.todo.todos);
  const toggleTodoForm = useAppSelector(state => state.showForm.isOpen);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(showTodoForm());
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {toggleTodoForm && (
        <View className="fixed top-0 left-0 bg-slate-400/60 backdrop-blur-sm justify-center h-screen z-50">
          <AddTodoForm />
        </View>
      )}
      <View>
        <Text
          className="bg-cyan-600 text-white font-black text-center text-xl
        py-5 uppercase">
          Daily Todos
        </Text>
      </View>

      <View className="py-5 px-4">
        <View className="py-4 px-2 bg-slate-100 rounded-md flex-row gap-2">
          <Text>
            Eslint can be told that an indentation of 4 is required or a tab,
            which is an escaped character.
          </Text>
        </View>
        <View className="border-b border-slate-200 my-8" />
        <View>
          <Text className="text-slate-800 font-bold text-lg">TODOS</Text>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Todo todo={item} />}
          />
        </View>
      </View>
      {!toggleTodoForm && (
        <Pressable
          onPress={handleAddTodo}
          className="absolute bottom-16 right-8 z-40 bg-cyan-600 rounded-full shadow-lg aspect-square w-16 justify-center items-center active:bg-cyan-700">
          <Text className="text-xl text-white">+</Text>
        </Pressable>
      )}
    </>
  );
};

export default App;
