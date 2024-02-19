import React from 'react';
import { View, Image, Text } from 'react-native';

// Supprime l'importation du fichier de style CSS, car les styles seront définis directement dans le composant React Native

function ResistanceItem({ iconSrc, label, value }) {
  return (
    <View>
      <Text>
        <Image source={{ uri: `../../../../assets/images/${iconSrc}-icon.png` }} style={{ width: 20, height: 20 }} />
        {label} : {value}
      </Text>
    </View>
  );
}

export default ResistanceItem;
