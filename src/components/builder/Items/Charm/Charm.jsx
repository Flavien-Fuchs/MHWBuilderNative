import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Modal } from 'react-native';
import { styles } from '../Armors/ArmorsStyle';
import CharmItem from './CharmItem';
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>

          <ImageBackground
            source={require("../../../../assets/images/background.jpg")}
            resizeMode="cover"
            style={styles.globalItemContainer}>

            <View style={styles.itemNavBar}>
              <TouchableOpacity onPress={closePage}>
                <Ionicons style={styles.ionicon} name="close" />
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
              style={styles.flatlist}
            />
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
}



export default Charms;
