import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";

const GamePause = ({ isPlaying, setIsPlaying, gameIsEnd, navigation }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!isPlaying && !gameIsEnd}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      onBackdropPress={() => {
        console.log("modalVisible", modalVisible);
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
                  reprendre
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBrownOpacity,
    justifyContent: "center",
    alignItems: "center",
  },
  containerModal: {
    padding: 20,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "800",
  },
  texteWhite: {
    color: colors.white,
  },
  containerBtn: {
    padding: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
