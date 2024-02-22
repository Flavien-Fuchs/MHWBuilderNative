import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Modal } from 'react-native';
import { styles } from '../Armors/ArmorsStyle';

function Charms({ charms, handleCharms, closePage }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (text) => setSearchTerm(text);

  const newCharms = charms.filter((item) => {
    return (
      item.ranks[item.ranks.length - 1].skills.some(
        (skill) =>
          skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  const renderItem = ({ item }) => {
    const actualCharm = item.ranks[item.ranks.length - 1];

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleCharms(item)}
      >
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
                {skill.skillName} - {skill.level}
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide"
    transparent={true}
    style={styles.globalItemContainer}
    >

    <ImageBackground
          source={require("../../../../assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.globalItemContainer}>

      <View style={styles.itemNavBar}>
        <TouchableOpacity onPress={closePage}>
          <Text style={styles.button}>close</Text>
        </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={searchTerm}
            onChangeText={handleSearchTerm}
            placeholder="Search item by name or skill"
          />
        </View>

      <FlatList
        data={newCharms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </ImageBackground>
    </Modal>
  );
}



export default Charms;
