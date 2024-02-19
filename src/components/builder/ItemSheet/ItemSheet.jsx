import React from "react";
import { View } from "react-native";
import { styles } from "./ItemSheetStyle";
import ItemSheetSingle from '../ItemSheetSingle/ItemSheetSingle'
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
  displayItem,
  setDisplayItem,
  deleteItem
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
      <View style={[styles.part , styles.part1]}>
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

ItemSheet.propTypes = {
  head: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    rank: PropTypes.string,
    rarity: PropTypes.number,
    defense: PropTypes.shape({
      base: PropTypes.number,
      max: PropTypes.number,
      augmented: PropTypes.number,
    }),
    resistances: PropTypes.shape({
      fire: PropTypes.number,
      water: PropTypes.number,
      ice: PropTypes.number,
      thunder: PropTypes.number,
      dragon: PropTypes.number,
    }),
    name: PropTypes.string,
    skills: PropTypes.array,
  }),

  chest: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    rank: PropTypes.string,
    rarity: PropTypes.number,
    defense: PropTypes.shape({
      base: PropTypes.number,
      max: PropTypes.number,
      augmented: PropTypes.number,
    }),
    resistances: PropTypes.shape({
      fire: PropTypes.number,
      water: PropTypes.number,
      ice: PropTypes.number,
      thunder: PropTypes.number,
      dragon: PropTypes.number,
    }),
    name: PropTypes.string,
    skills: PropTypes.array,
  }),

  gloves: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    rank: PropTypes.string,
    rarity: PropTypes.number,
    defense: PropTypes.shape({
      base: PropTypes.number,
      max: PropTypes.number,
      augmented: PropTypes.number,
    }),
    resistances: PropTypes.shape({
      fire: PropTypes.number,
      water: PropTypes.number,
      ice: PropTypes.number,
      thunder: PropTypes.number,
      dragon: PropTypes.number,
    }),
    name: PropTypes.string,
    skills: PropTypes.array,
  }),

  waist: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    rank: PropTypes.string,
    rarity: PropTypes.number,
    defense: PropTypes.shape({
      base: PropTypes.number,
      max: PropTypes.number,
      augmented: PropTypes.number,
    }),
    resistances: PropTypes.shape({
      fire: PropTypes.number,
      water: PropTypes.number,
      ice: PropTypes.number,
      thunder: PropTypes.number,
      dragon: PropTypes.number,
    }),
    name: PropTypes.string,
    skills: PropTypes.array,
  }),

  legs: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    rank: PropTypes.string,
    rarity: PropTypes.number,
    defense: PropTypes.shape({
      base: PropTypes.number,
      max: PropTypes.number,
      augmented: PropTypes.number,
    }),
    resistances: PropTypes.shape({
      fire: PropTypes.number,
      water: PropTypes.number,
      ice: PropTypes.number,
      thunder: PropTypes.number,
      dragon: PropTypes.number,
    }),
    name: PropTypes.string,
    skills: PropTypes.array,
  }),

  weapon: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    rank: PropTypes.string,
    rarity: PropTypes.number,
    attack: PropTypes.array,
    name: PropTypes.string,
    durability: PropTypes.arrayOf(
      PropTypes.shape({
        red: PropTypes.number,
        orange: PropTypes.number,
        yellow: PropTypes.number,
        green: PropTypes.number,
        blue: PropTypes.number,
        white: PropTypes.number,
        purple: PropTypes.number,
      })
    ),
  }),

  charm: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rank: PropTypes.shape({
      level: PropTypes.number,
      rarity: PropTypes.number,
    }),
  }),

  setArmorPage: PropTypes.func.isRequired,
  setWeaponPage: PropTypes.func.isRequired,
  setCharmsPage: PropTypes.func.isRequired,
  setBuilder: PropTypes.func.isRequired,
  displayItem: PropTypes.string,
  setDisplayItem: PropTypes.func.isRequired,
}; 

export default ItemSheet;
