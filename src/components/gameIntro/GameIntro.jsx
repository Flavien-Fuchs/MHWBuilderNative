import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { styles } from "./GameIntroStyle";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const GameIntro = ({ handleVideoEnd, pathVideo }) => {
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (videoRef.current) {
      videoRef.current.pauseAsync();
      handleVideoEnd();
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Video
            ref={videoRef}
            source={pathVideo}
            style={styles.video}
            resizeMode="cover"
            shouldPlay
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                handleVideoEnd();
              }
            }}
          />
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => handleVideoPress()}
          >
            <Text style={styles.textWhite}>Skip</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default GameIntro;
