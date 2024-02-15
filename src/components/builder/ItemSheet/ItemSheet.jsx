import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ItemSheetStyle";
import PropTypes from "prop-types";
import ItemCharm from "../Parts/ItemCharm";
import ItemChest from "../Parts/ItemChest";
import ItemGloves from "../Parts/ItemGloves";
import ItemHead from "../Parts/ItemHead";
import ItemLegs from "../Parts/ItemLegs";
import ItemWaist from "../Parts/ItemWaist";
import ItemWeapon from "../Parts/ItemWeapon";

const ItemSheet = ({
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
  setBuilder,
  deleteItem,
  displayItem,
  setDisplayItem,
}) => {
  const toggleDisplayItem = (type) => {
    setDisplayItem(type);
  };

  return (

    <View style={styles.globalContainer}>
      {displayItem && (
        <ItemSheetSingle
          type={displayItem}
          head={head}
          chest={chest}
          gloves={gloves}
          waist={waist}
          legs={legs}
          weapon={weapon}
          charm={charm}
          setArmorPage={setArmorPage}
          setWeaponPage={setWeaponPage}
          setCharmsPage={setCharmsPage}
          setBuilder={setBuilder}
          toggleDisplayItem={toggleDisplayItem}
          deleteItem={deleteItem}
        />
      )}
      <View style={styles.part}>
        <ItemHead
          head={head}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
        />
        <ItemCharm
          charm={charm}
          toggleDisplayItem={toggleDisplayItem}
          setCharmsPage={setCharmsPage}
          setBuilder={setBuilder}
        />
      </View>

      <View style={styles.part}>
        <ItemWeapon
          weapon={weapon}
          toggleDisplayItem={toggleDisplayItem}
          setWeaponPage={setWeaponPage}
          setBuilder={setBuilder}
        />
        <ItemChest
          chest={chest}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
        />
        <ItemGloves
          gloves={gloves}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
        />
      </View>

      <View style={styles.part}>
        <ItemWaist
          waist={waist}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
        />
      </View>

      <View style={styles.part}>
        <ItemLegs
          legs={legs}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
        />
      </View>
    </View>
  );
};

/* ItemSheet.propTypes = {
  head: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rank: PropTypes.string,
    rarity: PropTypes.number.isRequired,
    defense: PropTypes.shape({
      base: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      augmented: PropTypes.number.isRequired,
    }).isRequired,
    resistances: PropTypes.shape({
      fire: PropTypes.number.isRequired,
      water: PropTypes.number.isRequired,
      ice: PropTypes.number.isRequired,
      thunder: PropTypes.number.isRequired,
      dragon: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.array,
  }).isRequired,

  chest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rank: PropTypes.string,
    rarity: PropTypes.number.isRequired,
    defense: PropTypes.shape({
      base: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      augmented: PropTypes.number.isRequired,
    }).isRequired,
    resistances: PropTypes.shape({
      fire: PropTypes.number.isRequired,
      water: PropTypes.number.isRequired,
      ice: PropTypes.number.isRequired,
      thunder: PropTypes.number.isRequired,
      dragon: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.array,
  }).isRequired,

  gloves: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rank: PropTypes.string,
    rarity: PropTypes.number.isRequired,
    defense: PropTypes.shape({
      base: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      augmented: PropTypes.number.isRequired,
    }).isRequired,
    resistances: PropTypes.shape({
      fire: PropTypes.number.isRequired,
      water: PropTypes.number.isRequired,
      ice: PropTypes.number.isRequired,
      thunder: PropTypes.number.isRequired,
      dragon: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.array,
  }).isRequired,

  waist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rank: PropTypes.string,
    rarity: PropTypes.number.isRequired,
    defense: PropTypes.shape({
      base: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      augmented: PropTypes.number.isRequired,
    }).isRequired,
    resistances: PropTypes.shape({
      fire: PropTypes.number.isRequired,
      water: PropTypes.number.isRequired,
      ice: PropTypes.number.isRequired,
      thunder: PropTypes.number.isRequired,
      dragon: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.array,
  }).isRequired,

  legs: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rank: PropTypes.string,
    rarity: PropTypes.number.isRequired,
    defense: PropTypes.shape({
      base: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      augmented: PropTypes.number.isRequired,
    }).isRequired,
    resistances: PropTypes.shape({
      fire: PropTypes.number.isRequired,
      water: PropTypes.number.isRequired,
      ice: PropTypes.number.isRequired,
      thunder: PropTypes.number.isRequired,
      dragon: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.array,
  }).isRequired,

  weapon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rank: PropTypes.string,
    rarity: PropTypes.number.isRequired,
    attack: PropTypes.array,
    name: PropTypes.string.isRequired,
    durability: PropTypes.arrayOf(
      PropTypes.shape({
        red: PropTypes.number.isRequired,
        orange: PropTypes.number.isRequired,
        yellow: PropTypes.number.isRequired,
        green: PropTypes.number.isRequired,
        blue: PropTypes.number.isRequired,
        white: PropTypes.number.isRequired,
        purple: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,

  charm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.shape({
      level: PropTypes.number.isRequired,
      rarity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

  setArmorPage: PropTypes.func.isRequired,
  setWeaponPage: PropTypes.func.isRequired,
  setCharmsPage: PropTypes.func.isRequired,
  setBuilder: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  displayItem: PropTypes.string,
  setDisplayItem: PropTypes.func.isRequired,
}; */

export default ItemSheet;
