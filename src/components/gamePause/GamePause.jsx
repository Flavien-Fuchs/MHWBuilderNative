import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";
import { styles } from "./GamePauseStyle";

const GamePause = ({ isPlaying, setIsPlaying, gameIsEnd, navigation }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!isPlaying && !gameIsEnd}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      onBackdropPress={() => {
        setIsPlaying(false);
      }}
      onRequestClose={() => {
        setIsPlaying(!isPlaying);
      }}
    >
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.containerModal}>
            <Text style={[styles.title, styles.texteWhite]}>Pause</Text>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
                <Text style={[styles.btn, styles.title, styles.texteWhite]}>
                  to resume
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.btn, styles.title, styles.texteWhite]}>
                  command
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={[styles.btn, styles.title, styles.texteWhite]}>
                  Quit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default GamePause;
