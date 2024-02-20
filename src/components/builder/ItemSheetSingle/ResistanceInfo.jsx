import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { styles } from '../ItemSheet/ItemSheetStyle';

export const ResistanceInfo = ({ icon, label, value }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text>
        {label} : {value}
      </Text>
    </View>
  );
};
