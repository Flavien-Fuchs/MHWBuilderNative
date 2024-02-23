import { Text, View, ImageBackground } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./BuilderScreenStyle";
import ItemSheet from "../../components/builder/ItemSheet/ItemSheet";
import Stats from "../../components/builder/Stats/Stats";
import GameButton from "../../components/builder/GameButton/GameButton";
import SkillModal from "../../components/builder/SkillModal/SkillModal";
import Armors from "../../components/builder/Items/Armors/Armors";
import Weapons from "../../components/builder/Items/Weapons/Weapons";
import Charms from "../../components/builder/Items/Charm/Charm";
import { useNavigation } from "@react-navigation/native";

const BuilderScreen = ({ route }) => {
  const { armors, weapons, charms, skills } = route.params;

  //states for pages
  const navigation = useNavigation();
  const [index, setIndex] = useState(true);
  const [builder, setBuilder] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [armorPage, setArmorPage] = useState(null);
  const [charmsPage, setCharmsPage] = useState(null);
  const [weaponPage, setWeaponPage] = useState(null);
  const [displayItem, setDisplayItem] = useState(null);
  const [skillModalVisible, setSkillModalVisible] = useState(false);
  const [actualSkill, setActualSkill] = useState(false);
  //states for Equipments
  const [head, setHead] = useState(null);
  const [chest, setChest] = useState(null);
  const [gloves, setGloves] = useState(null);
  const [waist, setWaist] = useState(null);
  const [legs, setLegs] = useState(null);
  const [weapon, setWeapon] = useState(null);
  const [charm, setCharm] = useState(null);
  // States for User stats
  const [health, setHealth] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [baseDefense, setBaseDefense] = useState(0);
  const [maxDefense, setMaxDefense] = useState(0);
  const [augDefense, setAugDefense] = useState(0);
  const [resFire, setResFire] = useState(0);
  const [resWater, setResWater] = useState(0);
  const [resIce, setResIce] = useState(0);
  const [resThunder, setResThunder] = useState(0);
  const [resDragon, setResDragon] = useState(0);
  const [attack, setAttack] = useState(0);
  const [elementalAttack, setElementalAttack] = useState([]);
  const [affinity, setAffinity] = useState(0);
  const [criticalBoost, setCriticalBoost] = useState(125);
  const [sharpness, setSharpness] = useState([]);
  const [playerSkills, setPlayerSkills] = useState([]);

  const play = () => {
    navigation.navigate("SelecterCharacter")
  };

  function addDefStats(armor, pastArmor, action) {
    if (pastArmor !== null) {
      addDefense(
        action,
        pastArmor.defense.base,
        pastArmor.defense.max,
        pastArmor.defense.augmented,
        armor.defense.base,
        armor.defense.max,
        armor.defense.augmented
      );
      addRes(
        action,
        pastArmor.resistances.fire,
        pastArmor.resistances.water,
        pastArmor.resistances.ice,
        pastArmor.resistances.thunder,
        pastArmor.resistances.dragon,
        armor.resistances.fire,
        armor.resistances.water,
        armor.resistances.ice,
        armor.resistances.thunder,
        armor.resistances.dragon
      );

      addSkills(action, pastArmor.skills, armor.skills);
    } else {
      addDefense(
        action,
        null,
        null,
        null,
        armor.defense.base,
        armor.defense.max,
        armor.defense.augmented
      );
      addRes(
        action,
        null,
        null,
        null,
        null,
        null,
        armor.resistances.fire,
        armor.resistances.water,
        armor.resistances.ice,
        armor.resistances.thunder,
        armor.resistances.dragon
      );
      addSkills(action, null, armor.skills);
    }
  }

  function addDefense(
    action,
    pastBaseDef,
    pastMaxDef,
    pastAugDef,
    baseDef,
    maxDef,
    augDef
  ) {
    if (action === "add") {
      setBaseDefense(baseDefense + baseDef);
      setMaxDefense(maxDefense + maxDef);
      setAugDefense(augDefense + augDef);
    }

    if (action === "less") {
      setBaseDefense(baseDefense - pastBaseDef + baseDef);
      setMaxDefense(maxDefense - pastMaxDef + maxDef);
      setAugDefense(augDefense - pastAugDef + augDef);
    }
    if (action === "delete") {
      setBaseDefense(baseDefense - pastBaseDef);
      setMaxDefense(maxDefense - pastMaxDef);
      setAugDefense(augDefense - pastAugDef);
    }
  }

  function addRes(
    action,
    pastFire,
    pastWater,
    pastIce,
    pastThunder,
    pastDragon,
    fire,
    water,
    ice,
    thunder,
    dragon
  ) {
    if (action === "add") {
      setResFire(resFire + fire);
      setResWater(resWater + water);
      setResIce(resIce + ice);
      setResThunder(resThunder + thunder);
      setResDragon(resDragon + dragon);
    }
    if (action === "less") {
      setResFire(resFire - pastFire + fire);
      setResWater(resWater - pastWater + water);
      setResIce(resIce - pastIce + ice);
      setResThunder(resThunder - pastThunder + thunder);
      setResDragon(resDragon - pastDragon + dragon);
    }
    if (action === "delete") {
      setResFire(resFire - pastFire);
      setResWater(resWater - pastWater);
      setResIce(resIce - pastIce);
      setResThunder(resThunder - pastThunder);
      setResDragon(resDragon - pastDragon);
    }
  }

  function addSkills(action, pastSkills, selectSkills) {
    let newPlayerSkills = [...playerSkills];

    if (action === "less" || action === "delete") {
      if (pastSkills.length > 0) {
        pastSkills.map((pastSkill) => {
          newPlayerSkills = newPlayerSkills.map((newPlayerSkill) => {
            if (newPlayerSkill.skillName === pastSkill.skillName) {
              if (newPlayerSkill.level - pastSkill.level > 0) {
                return {
                  ...newPlayerSkill,
                  level: newPlayerSkill.level - pastSkill.level,
                };
              } else {
                return null;
              }
            } else {
              return newPlayerSkill;
            }
          });
        });
      }
    }

    function removeValue(value, index, arr) {
      if (value === null) {
        arr.splice(index, 1);
        return true;
      }
      return false;
    }
    newPlayerSkills.filter(removeValue);

    if (selectSkills.length > 0 && action !== "delete") {
      selectSkills.map((selectSkill) => {
        if (
          newPlayerSkills.some(
            (newPlayerSkill) =>
              newPlayerSkill.skillName === selectSkill.skillName
          )
        ) {
          newPlayerSkills = newPlayerSkills.map((newPlayerSkill) => {
            if (newPlayerSkill.skillName === selectSkill.skillName) {
              return {
                ...newPlayerSkill,
                level: newPlayerSkill.level + selectSkill.level,
              };
            } else {
              return newPlayerSkill;
            }
          });
        } else {
          newPlayerSkills.push(selectSkill);
        }
      });
    }
    setPlayerSkills(newPlayerSkills);
  }

  // Functions on click

  const deleteItem = (selectedStuff, type) => {
    switch (type) {
      case "head":
        addDefStats(selectedStuff, selectedStuff, "delete");
        setHead(null);
        break;
      case "chest":
        addDefStats(selectedStuff, selectedStuff, "delete");
        setChest(null);
        break;
      case "gloves":
        addDefStats(selectedStuff, selectedStuff, "delete");
        setGloves(null);
        break;
      case "waist":
        addDefStats(selectedStuff, selectedStuff, "delete");
        setWaist(null);
        break;
      case "legs":
        addDefStats(selectedStuff, selectedStuff, "delete");
        setLegs(null);
        break;
      case "weapon":
        setWeapon(null);
        setAttack(0);
        setElementalAttack([]);
        setAffinity(0);
        setCriticalBoost(125);
        setSharpness([]);
        break;
      case "charm":
        addSkills(
          "delete",
          selectedStuff.ranks[selectedStuff.ranks.length - 1].skills,
          selectedStuff.ranks[selectedStuff.ranks.length - 1].skills
        );
        setCharm(null);
        break;
      default:
        break;
    }
    setDisplayItem(null);
  };

  const handleArmor = (selectedArmor, type) => {
    let armor = selectedArmor;
    switch (type) {
      case "head":
        head !== null
          ? addDefStats(armor, head, "less")
          : addDefStats(armor, null, "add");
        setHead(armor);
        break;
      case "chest":
        chest !== null
          ? addDefStats(armor, chest, "less")
          : addDefStats(armor, null, "add");
        setChest(armor);
        break;
      case "gloves":
        gloves !== null
          ? addDefStats(armor, gloves, "less")
          : addDefStats(armor, null, "add");
        setGloves(armor);
        break;
      case "waist":
        waist !== null
          ? addDefStats(armor, waist, "less")
          : addDefStats(armor, null, "add");
        setWaist(armor);
        break;
      case "legs":
        legs !== null
          ? addDefStats(armor, legs, "less")
          : addDefStats(armor, null, "add");
        setLegs(armor);
        break;
      default:
        break;
    }
    setArmorPage(null);
  };

  const handleWeapon = (weapon) => {
    setWeapon(weapon);
    setAttack(weapon.attack.display);
    setElementalAttack(weapon.elements);
    weapon.attributes.affinity
      ? setAffinity(weapon.attributes.affinity)
      : setAffinity(0);
    weapon.durability ? setSharpness(weapon.durability[0]) : setSharpness([]);
    setWeaponPage(null);
  };

  const handleCharms = (selectCharm) => {
    setCharm(selectCharm);
    charm
      ? addSkills(
        "less",
        charm.ranks[charm.ranks.length - 1].skills,
        selectCharm.ranks[charm.ranks.length - 1].skills
      )
      : addSkills(
        "add",
        null,
        selectCharm.ranks[selectCharm.ranks.length - 1].skills
      );
    setCharmsPage(null);
  };

  const closePage = () => {
    setArmorPage(null);
    setWeaponPage(null);
    setCharmsPage(null);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView style={styles.globalContainer}>
        <ItemSheet
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
          displayItem={displayItem}
          setDisplayItem={setDisplayItem}
          deleteItem={deleteItem}
        />
        <GameButton play={play} weapon={weapon} />
        <Stats
          health={health}
          stamina={stamina}
          baseDefense={baseDefense}
          maxDefense={maxDefense}
          augDefense={augDefense}
          resFire={resFire}
          resWater={resWater}
          resIce={resIce}
          resThunder={resThunder}
          resDragon={resDragon}
          attack={attack}
          elementalAttack={elementalAttack}
          affinity={affinity}
          criticalBoost={criticalBoost}
          sharpness={sharpness}
          playerSkills={playerSkills}
          skills={skills}
          setSkillModalVisible={setSkillModalVisible}
          setActualSkill={setActualSkill}
        />
        <SkillModal
          skillModalVisible={skillModalVisible}
          setSkillModalVisible={setSkillModalVisible}
          actualSkill={actualSkill}
          skills={skills}
        />
        {armorPage && (
          <Armors
            armors={armors}
            handleArmor={handleArmor}
            type={armorPage}
            closePage={closePage}
            armorPage={armorPage}
          />
        )}
        {weaponPage && (
          <Weapons
            weapons={weapons}
            handleWeapon={handleWeapon}
            closePage={closePage}
            weaponPage={weaponPage}
          />
        )}
        {charmsPage && (
          <Charms
            charms={charms}
            handleCharms={handleCharms}
            closePage={closePage}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BuilderScreen;
