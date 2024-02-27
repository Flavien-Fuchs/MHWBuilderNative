import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./GameButtonStyle"

function BuilderHeader({ play, weapon }) {

    return (
        weapon ? (
            <View style={styles.globalContainer} >
                <TouchableOpacity onPress={play} style={styles.playButton}>
                    <Text style={styles.playText}>Play</Text>
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.globalContainer}>
                <Text style={styles.text}>Select a Weapon to start playing</Text>
            </View>
        )
    )
}

export default BuilderHeader