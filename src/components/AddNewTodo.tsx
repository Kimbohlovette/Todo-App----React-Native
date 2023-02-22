import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
export function AddTodoForm() {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    console.log(inputText);
  };

  return (
    <View>
      <Text style={styles.addTodoText}>Add a todo item</Text>
      <View>
        <TextInput
          onChangeText={text => setInputText(text)}
          style={styles.inputControl}
          placeholder="Enter a goal for today"
        />
        <Pressable onPress={handleSubmit}>
          <Text style={styles.button}> Add Todo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'blue',
  },
  inputControl: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'slate',
    marginVertical: 16,
    borderRadius: 4,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default AddTodoForm;
