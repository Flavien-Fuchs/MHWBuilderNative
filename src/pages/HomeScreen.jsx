import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const play = () => {
    navigation.push("Builder");
  };
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={() => play()}>
          <Text>play</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
