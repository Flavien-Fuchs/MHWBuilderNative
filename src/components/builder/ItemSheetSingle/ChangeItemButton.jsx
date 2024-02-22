import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from "./ItemSheetSingleStyle"

export const ChangeItemButton = ({ type, toggleDisplayItem, setPage }) => {
  const onPressHandler = () => {
    toggleDisplayItem(null);
    setPage(type);
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Text style={styles.button}>Change item</Text>
    </TouchableOpacity>
  );
};