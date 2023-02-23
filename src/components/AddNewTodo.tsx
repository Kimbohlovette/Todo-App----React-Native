/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useAppDispatch } from '../app/hooks/index';
import { addTodo } from '../features/todo/todoSlice';
export function AddTodoForm() {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(inputText));
  };

  return (
    <View className="bg-white px-4 py-8 m-1 rounded-md">
      <Text className="my-4 text-cyan-500">Add a todo item</Text>
      <View>
        <TextInput
          onChangeText={text => setInputText(text)}
          placeholder="Enter a goal for today"
          className="border rounded-md border-slate-400 focus:border-cyan-400 focus:shadow shadow-cyan-100"
        />
        <View className="flex-row justify-between gap-2 my-4">
          <Pressable
            className="flex-1 py-4 my-4 bg-cyan-400 rounded-md active:bg-cyan-600"
            onPress={handleSubmit}>
            <Text className="text-center text-white uppercase"> Add Todo</Text>
          </Pressable>
          <Pressable
            className="flex-1 py-4 my-4  rounded-md hover:border-cyan-400 border border-slate-300"
            onPress={handleSubmit}>
            <Text className="text-center text-slate-500 uppercase">cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   addTodoText: {
//     fontSize: 16,
//     fontWeight: '800',
//     color: 'blue',
//   },
//   inputControl: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderWidth: 1,
//     borderColor: 'slate',
//     marginVertical: 16,
//     borderRadius: 4,
//   },
//   button: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: 'blue',
//     color: 'white',
//     textAlign: 'center',
//     marginVertical: 16,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: 'blue',
//   },
// });

export default AddTodoForm;
