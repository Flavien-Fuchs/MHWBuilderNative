import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/pages/HomeScreen/HomeScreen";
import BuilderScreen from "./src/pages/BuilderScreen/BuilderScreen";
import GameScreen from "./src/pages/GameScreen/GameScreen";
import SelecterCharacterScreen from "./src/pages/SelecterCaracterScreen/SelecterCharacterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Builder" component={BuilderScreen} />
        <Stack.Screen
          name="SelecterCharacter"
          component={SelecterCharacterScreen}
        />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
