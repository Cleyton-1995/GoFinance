import React from 'react';
import { Text, View } from 'react-native';

interface Props {
   title: string;
}

export function Dashboard({title}: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}