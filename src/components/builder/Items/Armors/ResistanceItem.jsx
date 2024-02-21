import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './ArmorsStyle';


function ResistanceItem({ iconSrc, label, value }) {
  return (
    <View>
      <Text style={styles.text}>
        <Image source={{ uri: `../../../../assets/images/${iconSrc}-icon.png` }} style={styles.icon} />
        {label} : {value}
      </Text>
    </View>
  );
}

export default ResistanceItem;
