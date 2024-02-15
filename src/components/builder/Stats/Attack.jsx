import { View, Text, Image, ScrollView } from "react-native"
import { styles } from "./StatsStyle"

function Attack({ attack, elementalAttack, affinity, criticalBoost, sharpness }) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.statsOn}>
                <Text style={styles.text}>Attack : </Text>
                <Text style={styles.text}>{attack}</Text>
            </View>

            <View style={styles.statsOff}>
                <Text style={styles.text}>Element : </Text>
                {elementalAttack[0] ? (
                    <Text style={styles.text}>{elementalAttack[0].damage} ({elementalAttack[0].type})</Text>
                ) : (
                    <Text style={styles.text}>0</Text>
                )}
            </View>

            <View style={styles.statsOn}>
                <Text style={styles.text}>Affinity : </Text>
                <Text style={styles.text}>{affinity}</Text>
            </View>

            <View style={styles.statsOff}>
                <Text style={styles.text}>Critical Boost : </Text>
                <Text style={styles.text}>{criticalBoost}</Text>
            </View>

            {sharpness.red &&
                <View style={styles.statsOn}>
                    <Text style={styles.text}>Sharpness :</Text>
                    <View style={styles.sharpnessContainer}>
                        <View style={{ width: sharpness.red / 3, height: 10, backgroundColor: "red" }}></View>
                        <View style={{ width: sharpness.orange / 3, height: 10, backgroundColor: "orange" }}></View>
                        <View style={{ width: sharpness.yellow / 3, height: 10, backgroundColor: "yellow" }}></View>
                        <View style={{ width: sharpness.green / 3, height: 10, backgroundColor: "green" }}></View>
                        <View style={{ width: sharpness.blue / 3, height: 10, backgroundColor: "blue" }}></View>
                        <View style={{ width: sharpness.white / 3, height: 10, backgroundColor: "white" }}></View>
                        <View style={{ width: sharpness.purple / 3, height: 10, backgroundColor: "purple" }}></View>
                    </View>
                </View>
            }

        </ScrollView>
    )
}

export default Attack