import { View, Text, Image } from "react-native"
import { styles } from "./StatsStyle"

function BarStat({ StateOn, text, value, image }) {
    return (
        <View style={StateOn === "On" ? styles.statsOn : styles.statsOff}>
            <View style={styles.leftView}>
                {image && <Image source={image} style={styles.leftViewImage} />}
                <Text style={styles.text}>{text}</Text>
            </View>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

export default BarStat