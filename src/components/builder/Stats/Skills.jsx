import { View, Text, FlatList } from "react-native"
import { styles } from "./StatsStyle"

function Skills({ skills, playerSkills }) {

    return (
        <FlatList
            data={playerSkills}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                let matchSkill = skills.filter(skill => skill.name === item.skillName)
                return (
                    <View style={index % 2 === 0 ? styles.statsOn : styles.statsOff}>
                        <Text style={styles.text}>{item.skillName}</Text>
                        <FlatList
                            style={styles.skillsCOntainer}
                            key={matchSkill[0].id}
                            data={matchSkill[0].ranks}
                            keyExtractor={(rank) => rank.id}
                            renderItem={(rank) => {
                                return (
                                    <View style={rank.index < item.level ? styles.skillOn : styles.skillOff}></View>
                                )
                            }}
                        />
                    </View>
                )
            }}
        />

    )
}

export default Skills