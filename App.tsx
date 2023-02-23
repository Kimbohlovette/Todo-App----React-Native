/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from "react";
import { StatusBar, Text, View } from "react-native";
import AddTodoForm from "./src/components/AddNewTodo";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="py-5 px-4">
        <Text
          className="text-cyan-500 font-black text-center text-xl
        ">
          My Todo Daily
        </Text>
        <View className="my-8">
          <AddTodoForm />
        </View>
      </View>
    </>
  );
};

export default App;
