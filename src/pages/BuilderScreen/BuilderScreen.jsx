import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./BuilderScreenStyle";

const BuilderScreen = ({ route }) => {
  const { armors, weapons, charms, skills } = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>BuilderScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default BuilderScreen;
