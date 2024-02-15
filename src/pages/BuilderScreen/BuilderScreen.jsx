import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './BuilderScreenStyle'
import ItemSheet from "../../components/builder/ItemSheet/ItemSheet";
import Stats from "../../components/builder/Stats/Stats";
import BuilderHeader from "../../components/builder/BuilderHeader/BuilderHeader";

const BuilderScreen = ({ route }) => {
  const { armors, weapons, charms, skills } = route.params

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

  return (
    <SafeAreaView style={styles.globalContainer}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.container}
      >
        <BuilderHeader />
        <ItemSheet />
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
        />

      </ImageBackground>
    </SafeAreaView>
  );
};

export default BuilderScreen;
