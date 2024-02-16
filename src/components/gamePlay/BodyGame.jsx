import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";

const BodyGame = ({
  setImDead,
  myCharacter,
  adversaire,
  setIsPlaying,
  setGameIsEnd,
  pathImg,
  pathImgAd,
}) => {
  const [viewHeight, setViewHeight] = useState(0);
  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setViewHeight(height);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ color: colors.white }}>temps</Text>
        </View>
        <TouchableOpacity onPress={() => setIsPlaying(false)}>
          <Image
            source={require("../../assets/images/menu-burger.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.part}>
          <Image source={pathImgAd} style={[styles.profileImage]} />
          <View style={{ alignItems: "center" }}>
            <View style={{}}>
              <Text style={styles.textWhite}>life</Text>
            </View>
            <Text style={styles.textWhite}>{adversaire.name}</Text>
          </View>
        </View>
        <View style={[styles.part]}>
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              padding: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "Yellow",
                gap: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  //   backgroundColor: "violet",
                  position: "relative",
                  //   flexDirection: "row",
                  //   justifyContent: "flex-start",
                  //   alignItems: "flex-start",
                  //   alignContent: "flex-start",
                }}
              >
                <View
                  //   onLayout={onLayout}
                  style={{
                    position: "absolute",
                    // height: "100%",
                    // width: "auto",
                    // alignSelf: "flex-start",
                    left: 0,
                    bottom: 0,
                    right: 0,
                    top: 0,
                    // backgroundColor: "yellow",
                    // flexDirection: "row",
                    // justifyContent: "flex-start",
                    // alignItems: "flex-start",
                    // alignContent: "flex-start",
                    overflow: "visible",
                  }}
                >
                  <Image
                    source={pathImg}
                    // resizeMode="cover"
                    style={[
                      {
                        height: "100%",
                        width: "auto",
                        flex: 1,
                        resizeMode: "contain",
                        overflow: "visible",
                        // alignItems: "",
                        // backgroundColor: "red",
                      },
                    ]}
                  />
                </View>
              </View>
              <View style={{}}>
                <Text style={styles.textWhite}>life</Text>
              </View>
              <Text style={styles.textWhite}>{myCharacter.name}</Text>
            </View>
            <View
              style={[
                {
                  flex: 1,
                  padding: 10,
                  //   backgroundColor: "green",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 10,
                },
              ]}
            >
              <TouchableOpacity>
                <Text style={styles.textWhite}>Defense</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setImDead(true);
                  setGameIsEnd(true);
                }}
              >
                <Text style={styles.textWhite}>lose</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setImDead(false);
                  setGameIsEnd(true);
                }}
              >
                <Text style={styles.textWhite}>win</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BodyGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: colors.white,
  },
  body: {
    flex: 1,
    gap: 10,
  },
  part: {
    flex: 1,
    // backgroundColor: "blue",
  },
  profileImage: {
    height: "80%",
    width: "auto",
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  textWhite: {
    color: colors.white,
    textTransform: "uppercase",
  },
});
