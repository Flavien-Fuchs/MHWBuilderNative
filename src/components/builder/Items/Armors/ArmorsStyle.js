import { colors } from "../../../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalItemContainer: {
      position: 'relative',
      zIndex: 100,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
    itemNavBar: {
      justifyContent: "start"
    },
    closeButton: {
      position: 'absolute',
      top: 10, 
      right: 10, 
      color: colors.neutralBlackColor,
      transition: '0.2s', 
      padding: 8,
    },
    searchBar: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        width: '90%',
        marginVertical: 8,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    item: {
        backgroundColor: colors.backgroundItem,
        padding: 16, 
        color: colors.neutralWhiteColor, 
        cursor: 'pointer', 
        shadowColor: colors.neutralBlackColor,
        shadowOffset: {
        width: 50,
        height: 50,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailsInfos: {
      marginTop: 16, 
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    armorImage: {
      width:100,
      height: 100
    },
    resistanceItem: {
      height: 20,
      width: 20,
    }
    
  });
  