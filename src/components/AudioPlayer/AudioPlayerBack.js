import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { Audio } from "expo-av";

const AudioPlayer = ({ source }) => {
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const loadSound = async () => {
      try {
        await sound.current.loadAsync(
          require("../../assets/audio/MHW_Original_Soundtrack.mp3")
        );
        if (source === "jeu") {
          await sound.current.loadAsync(
            require("../../assets/audio/MHW_Original_Soundtrack.mp3")
          );
        }

        sound.current.setIsLoopingAsync(true);
        sound.current.playAsync();
      } catch (error) {
        console.error("Erreur lors du chargement du son", error);
      }
    };

    loadSound();

    // Libérez les ressources audio lorsque le composant est démonté
    return () => {
      sound.current.unloadAsync();
    };
  }, [source]);

  return <View />; // Vous pouvez rendre n'importe quel composant ici, ou rien du tout
};

export default AudioPlayer;
