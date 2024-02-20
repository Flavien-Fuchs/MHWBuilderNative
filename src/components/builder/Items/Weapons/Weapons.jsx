import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { styles } from "./WeaponsStyle";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import WeaponsCategory from "./WeaponsCategory";
import { FlashList } from "@shopify/flash-list";
import { colors } from "../../../../utils/colors";

const Weapons = ({ weapons, handleWeapon, closePage, weaponPage }) => {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filterByType, setFilterByType] = useState("");

  const handleFilterByType = (value) => setFilterByType(value);
  const handleSelectOption = (value) => setSelectedOption(value);
  const handleSearchTerm = (value) => setSearchTerm(value);
  const handleChoiseType = (type) => {
    setWeaponType(type);
    setTypeChosen(true);
  };

  const backWeapon = () => setTypeChosen(false);

  let newWeapons = weapons.filter(
    (weapon) =>
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        weapon.elements.find((element) => element.type === selectedOption)) ||
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedOption === "") ||
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedOption === "0" &&
        weapon.elements.length === 0)
  );

  if (filterByType === "Attack") {
    newWeapons.sort((a, b) => b.attack.display - a.attack.display);
  } else if (filterByType === "Element") {
    newWeapons.sort((a, b) => {
      const damageA = a.elements[0]?.damage || 0;
      const damageB = b.elements[0]?.damage || 0;
      return damageB - damageA;
    });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleWeapon(item)}>
      <View style={styles.globalInfos}>
        <Text style={styles.paragraphList}>{item.name}</Text>
        <Text style={styles.rarity}>Rarity {item.rarity}</Text>
      </View>
      <View style={styles.detailsInfos}>
        {!item.assets ? (
          <Image
            source={{ uri: "../../../../src/images/nullArmor.png" }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        ) : item?.assets?.image ? (
          <Image
            source={{
              uri: item.assets.image,
            }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        ) : (
          <Image
            source={{ uri: item.assets.icon }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        )}

        <View style={styles.stats}>
          <Text style={styles.text}>Attack : {item.attack.display}</Text>
          {item.elements.length > 0 && (
            <Text style={styles.text}>
              Element : {item?.elements[0]?.damage} ({item?.elements[0]?.type})
            </Text>
          )}
          <Text style={styles.text}>
            Affinity :{" "}
            {item.attributes.affinity ? `${item.attributes.affinity}%` : "0%"}
          </Text>
          {item.durability && (
            <View style={styles.sharpnessContainer}>
              <Text style={styles.text}>Sharpness : </Text>
              <View
                style={{
                  width: item.durability[0].red / 3,
                  backgroundColor: colors.sharpnessRed,
                  height: 14,
                }}
              ></View>
              <View
                style={{
                  width: item.durability[0].orange / 3,
                  backgroundColor: colors.sharpnessOrange,
                  height: 14,
                }}
              ></View>
              <View
                style={{
                  width: item.durability[0].yellow / 3,
                  backgroundColor: colors.sharpnessYellow,
                  height: 14,
                }}
              ></View>
              <View
                style={{
                  width: item.durability[0].green / 3,
                  backgroundColor: colors.sharpnessGreen,
                  height: 14,
                }}
              ></View>
              <View
                style={{
                  width: item.durability[0].blue / 3,
                  backgroundColor: colors.sharpnessBlue,
                  height: 14,
                }}
              ></View>
              <View
                style={{
                  width: item.durability[0].white / 3,
                  backgroundColor: colors.sharpnessWhite,
                  height: 14,
                }}
              ></View>
              <View
                style={{
                  width: item.durability[0].purple / 3,
                  backgroundColor: colors.sharpnessPurple,
                  height: 14,
                }}
              ></View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={styles.globalItemContainer}
    >
      {!typeChosen ? (
        <ImageBackground
          source={require("../../../../assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.globalItemContainerType}>
          <TouchableOpacity onPress={closePage} style={styles.closeButton}>
            <Text style={styles.button}>Close</Text>
          </TouchableOpacity>

          <View style={styles.typeContainer}>
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("great-sword")}
              image={require("../../../../assets/images/ArmorsIcons/great-sword.png")}
              name={"Great Sword"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("sword-and-shield")}
              image={require("../../../../assets/images/ArmorsIcons/sword-and-shield.png")}
              name={"Sword & Shield"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("long-sword")}
              image={require("../../../../assets/images/ArmorsIcons/long-sword.png")}
              name={"Long Sword"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("hammer")}
              image={require("../../../../assets/images/ArmorsIcons/hammer.png")}
              name={"Hammer"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("hunting-horn")}
              image={require("../../../../assets/images/ArmorsIcons/hunting-horn.png")}
              name={"Hunting Horn"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("gunlance")}
              image={require("../../../../assets/images/ArmorsIcons/gunlance.png")}
              name={"Gunlance"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("switch-axe")}
              image={require("../../../../assets/images/ArmorsIcons/switch-axe.png")}
              name={"Switch Axe"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("charge-blade")}
              image={require("../../../../assets/images/ArmorsIcons/charge-blade.png")}
              name={"Charge Blade"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("insect-glaive")}
              image={require("../../../../assets/images/ArmorsIcons/insect-glaive.png")}
              name={"Insect Glaive"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("bow")}
              image={require("../../../../assets/images/ArmorsIcons/bow.png")}
              name={"Bow"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("light-bowgun")}
              image={require("../../../../assets/images/ArmorsIcons/light-bowgun.png")}
              name={"Light Bowgun"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("heavy-bowgun")}
              image={require("../../../../assets/images/ArmorsIcons/heavy-bowgun.png")}
              name={"Heavy Bowgun"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("dual-blades")}
              image={require("../../../../assets/images/ArmorsIcons/dual-blades.png")}
              name={"Dual Blades"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("lance")}
              image={require("../../../../assets/images/ArmorsIcons/lance.png")}
              name={"Lance"}
            />
          </View>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require("../../../../assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.globalItemContainer}
        >
          <View style={styles.itemNavBar}>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={backWeapon}>
                <Text style={styles.button}>Back to Weapon's Type</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={closePage} >
                <Text style={styles.button}>close</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              value={searchTerm}
              onChangeText={handleSearchTerm}
              placeholder={"Search item by name"}
            />
            <View style={styles.filters}>
              <Text style={styles.text}>Filter by :</Text>
              <View style={styles.filterDropdowns}>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedOption}
                  onValueChange={handleSelectOption}
                >
                  <Picker.Item label="Elements" value="" />
                  <Picker.Item label="Fire" value="fire" />
                  <Picker.Item label="Poison" value="poison" />
                  <Picker.Item label="Dragon" value="dragon" />
                  <Picker.Item label="Ice" value="ice" />
                  <Picker.Item label="Thunder" value="thunder" />
                  <Picker.Item label="Sleep" value="sleep" />
                  <Picker.Item label="Paralysis" value="paralysis" />
                  <Picker.Item label="Blast" value="max" />
                  <Picker.Item label="None" value="0" />
                </Picker>

                <Picker
                  style={styles.picker}
                  selectedValue={filterByType}
                  onValueChange={handleFilterByType}
                >
                  <Picker.Item label="Damages" value="" />
                  <Picker.Item label="Attack" value="Attack" />
                  <Picker.Item label="Element" value="Element" />
                </Picker>
              </View>
            </View>
          </View>
          <FlatList
            data={newWeapons}
            renderItem={renderItem}
            style={styles.flashList}
          />
        </ImageBackground>
      )}
    </Modal>
  );
};

export default Weapons;
