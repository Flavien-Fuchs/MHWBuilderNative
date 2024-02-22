import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ResistanceItem from "./ResistanceItem";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ArmorsStyle";
import ArmorsItem from "./ArmorsItem";

const Armors = ({ armors, handleArmor, type, closePage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByDefense, setFilterByDefense] = useState(null);
  const [filterByResistance, setFilterByResistance] = useState(null);

  const handleFilterByDefense = (value) => setFilterByDefense(value);
  const handleFilterByResistance = (value) => setFilterByResistance(value);
  const handleSearchTerm = (value) => setSearchTerm(value);

  let newArmors = armors.filter((item) => {
    return item.skills.some(
      (skill) =>
        item.type === type &&
        item.assets &&
        (skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  switch (filterByDefense) {
    case "base":
      newArmors.sort((a, b) => b.defense.base - a.defense.base);
      break;
    case "max":
      newArmors.sort((a, b) => b.defense.max - a.defense.max);
      break;
    case "augmented":
      newArmors.sort((a, b) => b.defense.augmented - a.defense.augmented);
      break;
    default:
      break;
  }

  switch (filterByResistance) {
    case "fire":
      newArmors.sort((a, b) => b.resistances.fire - a.resistances.fire);
      break;
    case "water":
      newArmors.sort((a, b) => b.resistances.water - a.resistances.water);
      break;
    case "ice":
      newArmors.sort((a, b) => b.resistances.ice - a.resistances.ice);
      break;
    case "thunder":
      newArmors.sort((a, b) => b.resistances.thunder - a.resistances.thunder);
      break;
    case "dragon":
      newArmors.sort((a, b) => b.resistances.dragon - a.resistances.dragon);
      break;
    default:
      break;
  }

  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={styles.globalItemContainer}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <ImageBackground
            source={require("../../../../assets/images/background.jpg")}
            resizeMode="cover"
            style={styles.globalItemContainer}
          >
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
              <View style={styles.filters}>
                <Text style={styles.text}>Filter by :</Text>
                <View style={styles.filterDropdowns}>
                  <Picker
                    style={styles.picker}
                    selectedValue={filterByDefense}
                    onValueChange={handleFilterByDefense}
                  >
                    <Picker.Item label="Defense" value="" />
                    <Picker.Item label="Base" value="base" />
                    <Picker.Item label="Max" value="max" />
                    <Picker.Item label="Augmented" value="augmented" />
                  </Picker>

                  <Picker
                    style={styles.picker}
                    selectedValue={filterByResistance}
                    onValueChange={handleFilterByResistance}
                  >
                    <Picker.Item label="Resistance" value="" />
                    <Picker.Item label="Fire" value="fire" />
                    <Picker.Item label="Water" value="water" />
                    <Picker.Item label="Ice" value="ice" />
                    <Picker.Item label="Thunder" value="thunder" />
                    <Picker.Item label="Dragon" value="dragon" />
                  </Picker>
                </View>
              </View>
            </View>
            <FlatList
              data={newArmors}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ArmorsItem item={item} handleArmor={handleArmor} type={type} />
              )}
            />
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

export default Armors;
