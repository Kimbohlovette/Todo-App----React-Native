import React from 'react';
import { Text, View } from 'react-native';

export const Todo = (props: { todo: string }) => {
  return (
    <View className="py-5 shadow bg-slate-200 my-1 rounded-md px-2 border-l-4 border-cyan-400">
      <Text className="text-slate-800 font-semibold">{props.todo}</Text>
    </View>
  );
};
