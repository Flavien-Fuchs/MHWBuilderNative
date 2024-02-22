import React from "react";
import { View } from "react-native";
import { styles } from "./ItemSheetStyle";
import ItemSheetSingle from "../ItemSheetSingle/ItemSheetSingle";
import PropTypes from "prop-types";
import ItemCharm from "../Parts/ItemCharm";
import ItemWeapon from "../Parts/ItemWeapon";
import ItemParts from "./ItemParts";

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
  deleteItem,
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
      <View style={[styles.part, styles.part1]}>
        <ItemParts
          part={head}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/backgroundItems/teteArmor.png")}
          type={"head"}
        />
        <ItemCharm
          part={charm}
          toggleDisplayItem={toggleDisplayItem}
          setCharmsPage={setCharmsPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/charm-icon.png")}
        />
      </View>

      <View style={styles.part}>
        <ItemWeapon
          part={weapon}
          toggleDisplayItem={toggleDisplayItem}
          setWeaponPage={setWeaponPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/backgroundItems/epee.png")}
        />
        <ItemParts
          part={chest}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/backgroundItems/torseArmor.png")}
          type={"chest"}
        />
        <ItemParts
          part={gloves}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/backgroundItems/mainArmor.png")}
          type={"gloves"}
        />
      </View>

      <View style={styles.part}>
        <ItemParts
          part={waist}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/backgroundItems/tailleArmor.png")}
          type={"waist"}
        />
      </View>

      <View style={styles.part}>
        <ItemParts
          part={legs}
          toggleDisplayItem={toggleDisplayItem}
          setArmorPage={setArmorPage}
          setBuilder={setBuilder}
          icon={require("../../../assets/images/backgroundItems/jambeArmor.png")}
          type={"legs"}
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
    attack: PropTypes.object,
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
