import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { styles } from '../ItemSheet/ItemSheetStyle';

export const ResistanceInfo = ({ iconSrc, label, value }) => {
  return (
    <View style={styles.container}>
      <Image source={iconSrc} style={styles.icon} />
      <Text>
        {label} : {value}
      </Text>
    </View>
  );
};
