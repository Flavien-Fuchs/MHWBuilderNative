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

            {/* sharpness.red &&
                <View style={styles.statsOn}>
                    <Text style={styles.text}>Sharpness :</Text>
                    <View className="sharpnessContainer">
                        <View className="sharpness red" style={{ "width": `${sharpness.red / 3}px` }}></View>
                        <View className="sharpness orange" style={{ "width": `${sharpness.orange / 3}px` }}></View>
                        <View className="sharpness yellow" style={{ "width": `${sharpness.yellow / 3}px` }}></View>
                        <View className="sharpness green" style={{ "width": `${sharpness.green / 3}px` }}></View>
                        <View className="sharpness blue" style={{ "width": `${sharpness.blue / 3}px` }}></View>
                        <View className="sharpness white" style={{ "width": `${sharpness.white / 3}px` }}></View>
                        <View className="sharpness purple" style={{ "width": `${sharpness.purple / 3}px` }}></View>
                    </View>
                </View>
             */}

        </ScrollView>
    )
}

export default Attack