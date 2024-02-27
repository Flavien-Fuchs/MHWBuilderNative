import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";
import { styles } from "./GamePauseStyle";
import { useState } from "react";


const GamePause = ({ isPlaying, setIsPlaying, gameIsEnd, navigation }) => {
  const [showRulesModal, setShowRulesModal] = useState(false);

  const showRules = () => {
    setShowRulesModal(true);
  };

  const hideRules = () => {
    setShowRulesModal(false);
  };

  return (
  <>
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
              <TouchableOpacity onPress={showRules}>
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
    <Modal
        animationType="slide"
        visible={showRulesModal}
        onRequestClose={hideRules}
        transparent={true}
      >
        <View style={styles.commandModal}>
            <View style={styles.modalView}>
              <Text style={[styles.title, styles.texteWhite]}>command</Text>
              <Text style={styles.texteWhite}>
                <Text style={styles.title}>ATTACK :</Text>{'\n'}               
                <Text style={styles.text}>
                  <Text>VS <Text style={styles.title}>DEFENSE</Text> = Deals 50% damages.</Text>{'\n'}
                  <Text>VS <Text style={styles.title}>ATTACK</Text> = Deals 100% damages to both.</Text>{'\n'}
                  <Text>VS <Text style={styles.title}>FIERCE ATTACK</Text> = Deals 100% damage and the player takes 200% damage in return.</Text>{'\n'}
                </Text>{'\n'}

                <Text style={styles.title}>DEFENSE :</Text>{'\n'}
                <Text style={styles.text}>
                  <Text>VS <Text style={styles.title}>DEFENSE</Text> = Nothing happens.</Text>{'\n'}
                  <Text>VS <Text style={styles.title}>ATTACK</Text> = Reduces damages by 50%.</Text>{'\n'}
                  <Text>VS <Text style={styles.title}>FIERCE ATTACK</Text> = Dodge attack and deals 200% damages.</Text>{'\n'}
                </Text>{'\n'}

                <Text style={styles.title}>SUPER ATTACK :</Text>{'\n'}
                <Text style={styles.text}>
                  <Text>VS <Text style={styles.title}>DEFENSE</Text> = The opponent dodges attack and the player takes 200% in return.</Text>{'\n'}
                  <Text>VS <Text style={styles.title}>ATTACK</Text> = Deals 200% damages and the player takes 100 in return.</Text>{'\n'}
                  <Text>VS <Text style={styles.title}>FIERCE ATTACK</Text> = 200% damages to both.</Text>
                </Text>
              </Text>
              <TouchableOpacity onPress={hideRules}>
                <Text style={[styles.closeBtn, styles.title, styles.texteWhite]}>
                  x
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
  </>
  );
};

export default GamePause;
