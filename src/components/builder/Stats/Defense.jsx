import { View, Text, Image, ScrollView } from "react-native"
import { styles } from "./StatsStyle"

function Defense({ health, stamina, baseDefense, maxDefense, augDefense, resFire, resWater, resIce, resThunder, resDragon }) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.statsOn}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/health-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Health : </Text>
                </View>
                <Text style={styles.text}>{health}</Text>
            </View>

            <View style={styles.statsOff}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/stamina-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Stamina : </Text>
                </View>
                <Text style={styles.text}>{stamina}</Text>
            </View>

            <View style={styles.statsOn}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/defense-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Defense : </Text>
                </View>
                <Text style={styles.text}>{baseDefense} | {maxDefense} | {augDefense}</Text>
            </View>

            <View style={styles.statsOff}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/fire-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Fire Resistance : </Text>
                </View>
                <Text style={styles.text}>{resFire}</Text>
            </View>

            <View style={styles.statsOn}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/water-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Water Resistance : </Text>
                </View>
                <Text style={styles.text}>{resWater}</Text>
            </View>

            <View style={styles.statsOff}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/ice-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Ice Resistance : </Text>
                </View>
                <Text style={styles.text}>{resIce}</Text>
            </View>

            <View style={styles.statsOn}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/thunder-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Thunder Resistance : </Text>
                </View>
                <Text style={styles.text}>{resThunder}</Text>
            </View>

            <View style={styles.statsOff}>
                <View style={styles.leftView}>
                    <Image source={require("../../../assets/images/icons/dragon-icon.png")} style={styles.leftViewImage} />
                    <Text style={styles.text}>Dragon Resistance : </Text>
                </View>
                <Text style={styles.text}>{resDragon}</Text>
            </View>

        </ScrollView>
    )
}

export default Defense