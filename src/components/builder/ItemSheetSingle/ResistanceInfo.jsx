import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { styles } from './ItemSheetSingleStyle';

export const ResistanceInfo = ({ iconSrc, label, value }) => {
  return (
    <View style={styles.resistContainer}>
      <Image source={iconSrc} style={styles.icon} />
      <Text style={styles.text}>
        {label} : {value}
      </Text>
    </View>
  );
};
