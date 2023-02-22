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
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import AddTodoForm from './src/components/AddNewTodo';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.appBody}>
        <Text style={styles.headerText}>My Todo Daily</Text>
        <AddTodoForm />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  appBody: { marginVertical: 36, paddingHorizontal: 16 },
  headerText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 16,
  },
});
