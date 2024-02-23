import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ItemsLoader from "../../components/home/ItemsLoader";
import axios from "axios";
import { styles } from "./HomeScreenStyle";

const HomeScreen = () => {
  const navigation = useNavigation();
  //states for API results
  const [armors, setArmors] = useState(null);
  const [weapons, setWeapons] = useState(null);
  const [charms, setCharms] = useState(null);
  const [skills, setSkills] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const armorApi = () => {
    return axios
      .get("https://mhw-db.com/armor")
      .then((response) => {
        setArmors(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download armor content : ", err);
      });
  };

  const weaponApi = () => {
    return axios
      .get("https://mhw-db.com/weapons")
      .then((response) => {
        setWeapons(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download weapon content : ", err);
      });
  };

  const charmsApi = () => {
    return axios
      .get("https://mhw-db.com/charms")
      .then((response) => {
        setCharms(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download charms content : ", err);
      });
  };

  const skillsApi = () => {
    return axios
      .get("https://mhw-db.com/skills")
      .then((response) => {
        setSkills(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download skills content : ", err);
      });
  };

  useEffect(() => {
    Promise.all([armorApi(), weaponApi(), charmsApi(), skillsApi()]).then(
      () => {
        setIsLoading(false);
      }
    );
  }, []);

  const play = () => {
    navigation.navigate("Builder", {
      armors: armors,
      weapons: weapons,
      charms: charms,
      skills: skills,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/homeBg.png")}
        resizeMode="cover"
        style={styles.login}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        ></Image>
        {!isLoading ? (
          <TouchableOpacity onPress={() => play()} style={styles.playButton}>
            <Text style={styles.playText}>play</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.loginContainer}>
            <Image
              source={require("../../assets/images/loading.gif")}
              style={styles.imageLoading}
            />
            <ItemsLoader name="Armors" type={armors} />
            <ItemsLoader name="Weapons" type={weapons} />
            <ItemsLoader name="Charms" type={charms} />
            <ItemsLoader name="Skills" type={skills} />
          </View>
        )}
        <View style={styles.footer}>
          <Text style={styles.textCenter}>©WCSWebDevMob All rights reserved, 2024</Text>
          <Text style={styles.textCenter}>
            All Datas and images are Monster Hunter: World and Capcom propriety.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
