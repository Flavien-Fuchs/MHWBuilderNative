import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: colors.bgBrownOpacity,
    justifyContent: "center",
    alignItems: "center",
  },
  containerModal: {
    padding: 20,
    shadowOpacity: 0.24,
    shadowRadius: 1,
    elevation: 4, 
    backgroundColor: colors.bgBrownOpacityplus,
    borderRadius: 10,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "800",
  },
  pause:{
    color: colors.pause,
    textAlign: "center",
    fontSize: 17,
  },
  texteWhite: {
    color: colors.neutralWhiteColor,
  },
  containerBtn: {
    padding: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  commandModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: colors.bgStatPopup,
 },
 modalView: {
  margin: 20,
  backgroundColor: colors.rankPopup,
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: colors.neutralBlackColor,
  shadowOffset: {
      width: 0,
      height: 2,
  },
  
},
text: {
    alignItems: "flex-start"
  },
closeBtn: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  fontSize: 30,
}

})