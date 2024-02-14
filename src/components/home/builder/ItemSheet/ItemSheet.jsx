import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../ItemSheet/ItemSheetStyle";
import PropTypes from "prop-types";

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
    <SafeAreaView>
      <View style={styles.container}>
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
            /* toggleDisplayItem={toggleDisplayItem} */
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
    </SafeAreaView>
  );
};

ItemSheet.propType = {
  head: PropTypes.object,
  chest: PropTypes.object,
  gloves: PropTypes.object,
  waist: PropTypes.object,
  legs: PropTypes.object,
  weapon: PropTypes.object,
  charm: PropTypes.object,
  setArmorPage: PropTypes.func.isRequired,
  setWeaponPage: PropTypes.func.isRequired,
  setCharmsPage: PropTypes.func.isRequired,
  setBuilder: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  displayItem: PropTypes.string,
  setDisplayItem: PropTypes.func.isRequired,
};

export default ItemSheet;
