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
import { FlatList, StatusBar, Text, View } from 'react-native';
import AddTodoForm from './src/components/AddNewTodo';
import { useAppSelector } from './src/app/hooks/index';

const App = () => {
  const todos = useAppSelector(state => state.todo.todos);
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View className="hidden fixed top-0 left-0 bg-slate-400/60 backdrop-blur-sm justify-center h-screen">
        <AddTodoForm />
      </View>
      <View>
        <Text
          className="bg-cyan-600 text-white font-black text-center text-xl
        py-5 uppercase">
          Daily Todos
        </Text>
      </View>

      <View className="py-5 px-4">
        <View className="py-4 px-2 bg-slate-100 rounded-md">
          <Text className="text-slate-800 text-lg">Some tips!!</Text>
          <Text>
            {' '}
            Eslint can be told that an indentation of 4 is required or a tab,
            which is an escaped character.
          </Text>
        </View>
      </View>
      <View>
        <Text>Your todos</Text>
        <FlatList data={todos} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </>
  );
};

export default App;
