import { Text, TouchableOpacity } from "react-native";
import { styles } from "./StatsStyle"

function ButtonStats({ name, setStatsPages, statsPages }) {
    return (
        <TouchableOpacity onPress={() => setStatsPages(name)}>
            <Text style={statsPages === name ? styles.buttonActive : styles.button}>{name}</Text>
        </TouchableOpacity>
    )
}

export default ButtonStats