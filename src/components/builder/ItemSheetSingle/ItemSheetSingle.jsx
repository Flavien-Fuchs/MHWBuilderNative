import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { styles } from '../../../components/builder/ItemSheetSingle/ItemSheetSingleStyle'
import { ChangeItemButton } from './ChangeItemButton';
import { ResistanceInfo } from './ResistanceInfo';
import { colors } from '../../../utils/colors';

function ItemSheetSingle ({ 
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
  deleteItem }){
  

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
      <View style={styles.ISSButtons}>
        <TouchableOpacity onPress={() => deleteItem(actualItem, type)}>
          <Text>Delete item</Text>
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
        <TouchableOpacity
          style={styles.ISSingleClose}
          onPress={() => toggleDisplayItem(null)}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ISSView}>
        <Text>{actualItem.name}</Text>
        {actualItem.rarity ? (
          <Text>Rarity {actualItem.rarity}</Text>
        ) : (
          <Text>Rarity {actualItem.ranks[actualItem.ranks.length - 1].rarity} </Text>
        )}
        {type === 'weapon' ? (
          <View style={styles.ISSDescription}>
            {!actualItem.assets ? (
              <Image source={require('../../../assets/images/nullArmor.png')} />
            ) : actualItem.assets.image ? (
              <Image source={{ uri: weapon.assets.image }} />
            ) : (
              <Image source={{ uri: weapon.assets.icon }} />
            )}
            <View style={styles.ISSStats}>
              <Text>Attack : {actualItem.attack.display}</Text>
              {actualItem.elements[0] ? (
                <Text>
                  Element : {actualItem.elements[0].damage} ({actualItem.elements[0].type})
                </Text>
              ) : (
                <Text>Element : 0</Text>
              )}
              {actualItem.attributes.affinity ? (
                <Text>Affinity : {actualItem.attributes.affinity}%</Text>
              ) : (
                <Text>Affinity : 0%</Text>
              )}
              {actualItem.durability && (
                <View>
                  <Text>Sharpness :</Text>
                  <View style={styles.sharpnessContainer}>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessRed , width: actualItem.durability[0].red / 3 }}></View>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessOrange , width: actualItem.durability[0].orange / 3 }}></View>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessYellow , width: actualItem.durability[0].yellow / 3 }}></View>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessGreen , width: actualItem.durability[0].green / 3 }}></View>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessBlue , width: actualItem.durability[0].blue / 3 }}></View>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessWhite , width: actualItem.durability[0].white / 3 }}></View>
                    <View style={{ height: 10, backgroundColor: colors.sharpnessPurple , width: actualItem.durability[0].purple / 3 }}></View>
                  </View>     
                </View>
              )}
            </View>
          </View>
        ) : type === 'charm' ? (
          <View style={styles.ISSDescription}>
            <View style={styles.ISSSkillsList}>
              <Image source={require('../../../assets/images/amulet3.png')}
              style={styles.armorImage}
              />
              <Text>Skills list</Text>
              <View>
                <FlatList
                data={actualItem.ranks[actualItem.ranks.length - 1].skills}
                keyExtractor={(skill,key)=> key.toString()}
                renderItem={(skill, key) => <Text key={key}>{skill.skillName} - {skill.level}</Text> }
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.ISSDescription}>
            {!actualItem.assets ? (
              <Image source={require('../../../assets/images/nullArmor.png')} />
            ) : actualItem.assets.imageMale ? (
              <Image source={{ uri: actualItem.assets.imageMale }} 
              style={styles.armorImage}
              />
            ) : (
              <Image source={{ uri: actualItem.assets.imageFemale }} 
              style={styles.armorImage}
              />
            )}
            <View style={styles.ISSStats}>
              <View style={styles.resistance}>
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/defense-icon.png')} label="Defense" value={`(${actualItem.defense.base}) (${actualItem.defense.max}) (${actualItem.defense.augmented})`} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/fire-icon.png')} label="Fire Resist" value={actualItem.resistances.fire} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/water-icon.png')} label="Water Resist" value={actualItem.resistances.water} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/ice-icon.png')} label="Ice Resist" value={actualItem.resistances.ice} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/thunder-icon.png')} label="Thunder Resist" value={actualItem.resistances.thunder} />
                <ResistanceInfo iconSrc={require('../../../assets/images/icons/dragon-icon.png')} label="Dragon Resist" value={actualItem.resistances.dragon} />
              </View>
            
              {actualItem.skills.length > 0 && (
                <View style={styles.ISSSkillsList}>
                  <Text>Skills list</Text>
                  <View>
                    <FlatList
                    data={actualItem.skills}
                    keyExtractor={(skill,key)=> key.toString()}
                    renderItem={(skill, key) => <Text key={key}>{skill.skillName} - {skill.level}</Text> }
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ItemSheetSingle;
