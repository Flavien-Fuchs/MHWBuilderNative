import { View, Text, Image, ScrollView } from "react-native"
import { styles } from "./StatsStyle"
import { colors } from "../../../utils/colors"
import BarStat from "./BarStat"

function Attack({ attack, elementalAttack, affinity, criticalBoost, sharpness }) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <BarStat StateOn="On" text="Attack : " value={attack} />

            <View style={styles.statsOff}>
                <Text style={styles.text}>Element : </Text>
                {elementalAttack[0] ? (
                    <Text style={styles.text}>{elementalAttack[0].damage} ({elementalAttack[0].type})</Text>
                ) : (
                    <Text style={styles.text}>0</Text>
                )}
            </View>

            <BarStat StateOn="On" text="Affinity : " value={affinity} />
            <BarStat StateOn="Off" text="Critical Boost : " value={criticalBoost} />

            {sharpness.red &&
                <View style={styles.statsOn}>
                    <Text style={styles.text}>Sharpness :</Text>
                    <View style={styles.sharpnessContainer}>
                        <View style={{ width: sharpness.red / 3, height: 10, backgroundColor: colors.sharpnessRed }}></View>
                        <View style={{ width: sharpness.orange / 3, height: 10, backgroundColor: colors.sharpnessOrange }}></View>
                        <View style={{ width: sharpness.yellow / 3, height: 10, backgroundColor: colors.sharpnessYellow }}></View>
                        <View style={{ width: sharpness.green / 3, height: 10, backgroundColor: colors.sharpnessGreen }}></View>
                        <View style={{ width: sharpness.blue / 3, height: 10, backgroundColor: colors.sharpnessBlue }}></View>
                        <View style={{ width: sharpness.white / 3, height: 10, backgroundColor: colors.sharpnessWhite }}></View>
                        <View style={{ width: sharpness.purple / 3, height: 10, backgroundColor: colors.sharpnessPurple }}></View>
                    </View>
                </View>
            }

        </ScrollView>
    )
}

export default Attack