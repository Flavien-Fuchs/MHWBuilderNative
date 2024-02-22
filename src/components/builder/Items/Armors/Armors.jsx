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
import Ionicons from "@expo/vector-icons/Ionicons";


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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleArmor(item, type)}
    >
      <View style={styles.globalInfos}>
        <Text style={styles.paragraphList}>{item.name}</Text>
        <Text style={styles.rarity}>Rarity {item.rarity}</Text>
      </View>
      <View style={styles.detailsInfos}>
        {!item.assets ? (
          <Image
            source={require("../../../../assets/images/nullArmor.png")}
            style={styles.armorImage}
            resizeMethod="resize"
          />
        ) : item.assets.imageMale ? (
          <Image
            source={{ uri: item.assets.imageMale }}
            style={styles.armorImage}
            resizeMethod="resize"
          />
        ) : (
          <Image
            source={{ uri: item.assets.imageFemale }}
            style={styles.armorImage}
            resizeMethod="resize"
          />
        )}

        <View style={styles.stats}>
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/defense-icon.png")}
            label={"Defense"}
            value={`${item.defense.base} | ${item.defense.max} | ${item.defense.augmented}`}
          />

          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/fire-icon.png")}
            label={"Fire Resist"}
            value={item.resistances.fire}
          />
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/water-icon.png")}
            label={"Water Resist"}
            value={item.resistances.water}
          />
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/ice-icon.png")}
            label={"Ice Resist"}
            value={item.resistances.ice}
          />
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/thunder-icon.png")}
            label={"Thunder Resist"}
            value={item.resistances.thunder}
          />
          <ResistanceItem
            iconSrc={require(`../../../../assets/images/icons/dragon-icon.png`)}
            label={"Dragon Resist"}
            value={item.resistances.dragon}
          />
        </View>
      </View>
      {item.skills && item.skills.length > 0 && (
        <View>
          <Text style={styles.skillsList}>Skills list</Text>
          <View style={styles.hideSkills}>
            {item.skills.map((skill, index) => (
              <Text key={index} style={styles.text}>
                {skill.skillName} - Level : {skill.level}
              </Text>
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

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
                <Ionicons style={styles.ionicon} name="close" />
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
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

export default Armors;
