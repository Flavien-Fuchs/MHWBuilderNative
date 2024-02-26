import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { styles } from '../Armors/ArmorsStyle';

const CharmItem = ({ item, handleCharms }) => {
  const actualCharm = item.ranks[item.ranks.length - 1];

  return (
    <TouchableOpacity style={styles.item} onPress={() => handleCharms(item)}>
      <Text style={styles.paragraphList}>{item.name}</Text>
      <Text style={styles.rarity}>Rarity {actualCharm.rarity}</Text>
      <Image
        source={require('../../../../assets/images/amulet3.png')}
        style={styles.armorImage}
        resizeMethod="resize"
      />
      <View>
        <Text style={styles.skillsList}>Skills list</Text>
        <View>
          {actualCharm.skills.map((skill, skillKey) => (
            <Text key={skillKey} style={styles.text}>
              {skill.skillName} - Level : {skill.level}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharmItem;
