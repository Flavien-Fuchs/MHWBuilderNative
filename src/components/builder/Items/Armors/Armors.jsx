import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ResistanceItem from './ResistanceItem';
import { styles } from './ArmorsStyle';

const Armors = ({ armors, handleArmor, type, closePage }) => {
  const [searchTerm, setSearchTerm] = useState('');
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
    case 'base':
      newArmors.sort((a, b) => b.defense.base - a.defense.base);
      break;
    case 'max':
      newArmors.sort((a, b) => b.defense.max - a.defense.max);
      break;
    case 'augmented':
      newArmors.sort((a, b) => b.defense.augmented - a.defense.augmented);
      break;
    default:
      break;
  }

  switch (filterByResistance) {
    case 'fire':
      newArmors.sort((a, b) => b.resistances.fire - a.resistances.fire);
      break;
    case 'water':
      newArmors.sort((a, b) => b.resistances.water - a.resistances.water);
      break;
    case 'ice':
      newArmors.sort((a, b) => b.resistances.ice - a.resistances.ice);
      break;
    case 'thunder':
      newArmors.sort((a, b) => b.resistances.thunder - a.resistances.thunder);
      break;
    case 'dragon':
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
            source={require('../../../../assets/images/nullArmor.png')}
            style={styles.armorImage}
          />
        ) : item.assets.imageMale ? (
          <Image source={{ uri: item.assets.imageMale }} style={styles.armorImage} />
        ) : (
          <Image source={{ uri: item.assets.imageFemale }} style={styles.armorImage} />
        )}

        <View style={styles.stats}>
          <Text style={styles.defense}>
            <Image
              source={require('../../../../assets/images/icons/defense-icon.png')}
              style={styles.defenseIcon}
            />
            Defense : {item.defense.base} | {item.defense.max} |{' '}
            {item.defense.augmented}
          </Text>
          <ResistanceItem
            iconSrc="fire"
            altText="fire"
            label="Fire Resist"
            value={item.resistances.fire}
          />
          <ResistanceItem
            iconSrc="water"
            altText="water"
            label="Water Resist"
            value={item.resistances.water}
          />
          <ResistanceItem
            iconSrc="ice"
            altText="ice"
            label="Ice Resist"
            value={item.resistances.ice}
          />
          <ResistanceItem
            iconSrc="thunder"
            altText="thunder"
            label="Thunder Resist"
            value={item.resistances.thunder}
          />
          <ResistanceItem
            iconSrc="dragon"
            altText="dragon"
            label="Dragon Resist"
            value={item.resistances.dragon}
          />
        </View>
        {item.skills && item.skills.length > 0 && (
          <View>
            <Text style={styles.skillsList}>Skills list</Text>
            <View style={styles.hideSkills}>
              <FlatList
              data={item.skills}
              key={(key)=>key}
              renderItem={(skill, key) => (
                <Text key={key}>
                  {skill.skillName} - {skill.level}
                </Text>
              )}
              />
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.globalItemContainer}>
      <View style={styles.itemNavBar}>
        <TouchableOpacity onPress={closePage} style={styles.closeButton}>
          {/* Utilisez une icône React Native ici */}
        </TouchableOpacity>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            value={searchTerm}
            onChangeText={handleSearchTerm}
            placeholder="Search item by name or skill"
          />
          <View style={styles.filters}>
            <Text>Filter by :</Text>
            <View style={styles.filterDropdowns}>
              <Picker
                style={styles.filterDropdown}
                selectedValue={filterByDefense}
                onValueChange={handleFilterByDefense}
              >
                <Picker.Item label="Defense" value="" />
                <Picker.Item label="Base" value="base" />
                <Picker.Item label="Max" value="max" />
                <Picker.Item label="Augmented" value="augmented" />
              </Picker>

              <Picker
                style={styles.filterDropdown}
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
      </View>
      <FlatList
        data={newArmors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Armors;
