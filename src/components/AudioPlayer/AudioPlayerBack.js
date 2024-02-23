import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { Audio } from "expo-av";

const VOLUME = 0.05;

const AudioPlayer = ({ source }) => {
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const loadSound = async () => {
      try {
        await sound.current.loadAsync(
          require("../../assets/audio/MHW_Original_Soundtrack.mp3")
        );
        if (source === "Game") {
          await sound.current.loadAsync(
            // jai pas encore la musique je vais le changer apres pour le jeu
            require("../../assets/audio/MHW_Original_Soundtrack.mp3")
          );
        }

        sound.current.setIsLoopingAsync(true);
        sound.current.setVolumeAsync(VOLUME);
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

  return <></>; // Vous pouvez rendre n'importe quel composant ici, ou rien du tout
};

export default AudioPlayer;
