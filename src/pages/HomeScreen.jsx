import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ItemsLoader from "../components/home/ItemsLoader";
import { armorApi, weaponApi, charmsApi, skillsApi } from "../utils/api";
import axios from "axios";

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
    Promise.all([armorApi(), weaponApi(), charmsApi(), skillsApi()])
      .then(
        () => {
          setIsLoading(false);
        }
      );
  }, [])


  const play = () => {
    navigation.push("Builder", { armors: armors, weapons: weapons, charms: charms, skills: skills })
  };


  return (
    <SafeAreaView>
      <View style={styles.login}>
        <Image source={require('../assets/images/logo.png')} style={styles.imageLoading}></Image>
        {!isLoading ?
          (<TouchableOpacity onPress={() => play()}>
            <Text>play</Text>
          </TouchableOpacity>) : (
            <View style={styles.loginContainer}>
              <ItemsLoader name="Armors" type={armors} />
              <ItemsLoader name="Weapons" type={weapons} />
              <ItemsLoader name="Charms" type={charms} />
              <ItemsLoader name="Skills" type={skills} />
            </View>
          )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  login: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageLoading: {
    width: 200,
  }
});
