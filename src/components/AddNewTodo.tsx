/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
export function AddTodoForm() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    console.log(inputText);
  };

  return (
    <View className="">
      <Text className="text-lg">Add a todo item</Text>
      <View>
        <TextInput
          onChangeText={text => setInputText(text)}
          placeholder="Enter a goal for today"
          className="py-2 px-4 border-2 rounded-md border-slate-400 focus:border-cyan-400 my-4"
        />
        <Pressable onPress={handleSubmit}>
          <Text className=""> Add Todo</Text>
        </Pressable>
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
