import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

function WeaponsSharpness({ itemWidth, itemColor }) {
  const itemStyle = {
    box: {
      width: itemWidth,
      backgroundColor: itemColor,
      height: 14,
    },
  };
  return <View style={itemStyle.box}></View>;
}

export default WeaponsSharpness;
