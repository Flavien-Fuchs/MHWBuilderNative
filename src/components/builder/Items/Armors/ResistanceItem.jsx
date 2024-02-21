import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './ArmorsStyle';


function ResistanceItem({ iconSrc, label, value }) {
  return (
    <View>
      <Text>
        <Image source={{ uri: `../../../../assets/images/${iconSrc}-icon.png` }} style={styles.resistanceItem} />
        {label} : {value}
      </Text>
    </View>
  );
}

export default ResistanceItem;
