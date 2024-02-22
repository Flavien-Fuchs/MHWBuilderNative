import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../../../components/builder/ItemSheetSingle/ItemSheetSingleStyle'
import { ChangeItemButton } from './ChangeItemButton';
import { ResistanceInfo } from './ResistanceInfo';
import { colors } from '../../../utils/colors';
import Ionicons from "@expo/vector-icons/Ionicons";


function ItemSheetSingle({
  type,
  head,
  chest,
  gloves,
  waist,
  legs,
  weapon,
  charm,
  setArmorPage,
  setWeaponPage,
  setCharmsPage,
  toggleDisplayItem,
  deleteItem }) {


  let actualItem = null;

  switch (type) {
    case 'head':
      actualItem = head;
      break;
    case 'chest':
      actualItem = chest;
      break;
    case 'gloves':
      actualItem = gloves;
      break;
    case 'waist':
      actualItem = waist;
      break;
    case 'legs':
      actualItem = legs;
      break;
    case 'weapon':
      actualItem = weapon;
      break;
    case 'charm':
      actualItem = charm;
      break;
    default:
      actualItem = null;
      break;
  }

  return (
    <View style={styles.ItemSheetSingleContainer}>
      <TouchableOpacity onPress={() => toggleDisplayItem(null)}>
        <Ionicons style={styles.ionicon} name="close" />
      </TouchableOpacity>

      <View style={styles.ISSView}>
        <Text style={styles.paragraphList}>{actualItem.name}</Text>
        {actualItem.rarity ? (
          <Text style={styles.rarity}>Rarity {actualItem.rarity}</Text>
        ) : (
          <Text style={styles.rarity}>Rarity {actualItem.ranks[actualItem.ranks.length - 1].rarity} </Text>
        )}
        {type === 'weapon' ? (
          <View style={styles.ISSStats}>
            {!actualItem.assets ? (
              <Image source={require('../../../assets/images/nullArmor.png')} style={styles.itemImage} />
            ) : actualItem.assets.image ? (
              <Image source={{ uri: weapon.assets.image }} style={styles.itemImage} />
            ) : (
              <Image source={{ uri: weapon.assets.icon }} style={styles.itemImage} />
            )}
            <View style={styles.resistance}>
              <Text style={styles.text}>Attack : {actualItem.attack.display}</Text>
              {actualItem.elements[0] ? (
                <Text style={styles.text}>
                  Element : {actualItem.elements[0].damage} ({actualItem.elements[0].type})
                </Text>
              ) : (
                <Text style={styles.text}>Element : 0</Text>
              )}
              {actualItem.attributes.affinity ? (
                <Text style={styles.text}>Affinity : {actualItem.attributes.affinity}%</Text>
              ) : (
                <Text style={styles.text}>Affinity : 0%</Text>
              )}
              {actualItem.durability && (
                <View>
                  <Text style={styles.text}>Sharpness :</Text>
                  <View style={styles.sharpnessContainer}>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessRed, width: actualItem.durability[0].red / 3 }}></View>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessOrange, width: actualItem.durability[0].orange / 3 }}></View>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessYellow, width: actualItem.durability[0].yellow / 3 }}></View>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessGreen, width: actualItem.durability[0].green / 3 }}></View>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessBlue, width: actualItem.durability[0].blue / 3 }}></View>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessWhite, width: actualItem.durability[0].white / 3 }}></View>
                    <View style={{ height: 16, backgroundColor: colors.sharpnessPurple, width: actualItem.durability[0].purple / 3 }}></View>
                  </View>
                </View>
              )}
            </View>
          </View>
        ) : type === 'charm' ? (
          <View style={styles.ISSDescription}>
            <View style={styles.ISSSkillsList}>
              <Image source={require('../../../assets/images/charm-icon.png')} style={styles.itemImage} />
              <Text style={styles.skillsList}>Skills list</Text>
              <View>
                <FlatList
                  data={actualItem.ranks[actualItem.ranks.length - 1].skills}
                  keyExtractor={(skill, key) => key.toString()}
                  renderItem={(skill, key) => <Text key={key} style={styles.text}>{skill.skillName} - Level : {skill.level}</Text>}
                  style={styles.flatList}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.ISSDescription}>
            <View style={styles.ISSStats}>
              {!actualItem.assets ? (
                <Image source={require('../../../assets/images/nullArmor.png')} style={styles.itemImage} />
              ) : actualItem.assets.imageMale ? (
                <Image style={styles.itemImage} source={{ uri: actualItem.assets.imageMale }} />
              ) : (
                <Image style={styles.itemImage} source={{ uri: actualItem.assets.imageFemale }} />
              )}

              <View style={styles.resistance}>
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/defense-icon.png')} label="Defense" value={`${actualItem.defense.base} | ${actualItem.defense.max} | ${actualItem.defense.augmented}`} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/fire-icon.png')} label="Fire Resist" value={actualItem.resistances.fire} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/water-icon.png')} label="Water Resist" value={actualItem.resistances.water} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/ice-icon.png')} label="Ice Resist" value={actualItem.resistances.ice} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/thunder-icon.png')} label="Thunder Resist" value={actualItem.resistances.thunder} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/dragon-icon.png')} label="Dragon Resist" value={actualItem.resistances.dragon} />
              </View>
            </View>
            {actualItem.skills.length > 0 && (
              <View style={styles.ISSSkillsList}>
                <Text style={styles.skillsList}>Skills list</Text>
                <FlatList
                  data={actualItem.skills}
                  keyExtractor={(skill, key) => key.toString()}
                  renderItem={({ item, key }) => <Text key={key} style={styles.textSkill}>{item.skillName} - Level : {item.level}</Text>}
                  style={styles.flatList}
                />
              </View>

            )}
          </View>
        )}

      </View>
      <View style={styles.ISSButtons}>
        <TouchableOpacity onPress={() => deleteItem(actualItem, type)}>
          <Text style={styles.button}>Delete item</Text>
        </TouchableOpacity>
        {type === 'weapon' && (
          <ChangeItemButton type={type} toggleDisplayItem={toggleDisplayItem} setPage={setWeaponPage} />
        )}
        {type === 'charm' && (
          <ChangeItemButton type={type} toggleDisplayItem={toggleDisplayItem} setPage={setCharmsPage} />
        )}
        {type !== 'charm' && type !== 'weapon' && (
          <ChangeItemButton type={type} toggleDisplayItem={toggleDisplayItem} setPage={setArmorPage} />
        )}
      </View>
    </View >
  );
};

export default ItemSheetSingle;


