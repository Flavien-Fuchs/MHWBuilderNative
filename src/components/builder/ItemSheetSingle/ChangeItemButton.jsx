import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const ChangeItemButton = ({ type, toggleDisplayItem, setPage }) => {
  const onPressHandler = () => {
    toggleDisplayItem(null);
    setPage(type);
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Text>Change item</Text>
    </TouchableOpacity>
  );
};