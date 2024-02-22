import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Modal } from 'react-native';
import { styles } from '../Armors/ArmorsStyle';
import CharmItem from './CharmItem';

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
        renderItem={({ item }) => (
          <CharmItem item={item} handleCharms={handleCharms} />
        )}
      />
    </ImageBackground>
    </Modal>
  );
}



export default Charms;
