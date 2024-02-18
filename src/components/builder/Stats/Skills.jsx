import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native"
import { styles } from "./StatsStyle"

function Skills({ skills, setSkillModalVisible, setActualSkill }) {

    const playerSkills = [
        {
            id: 211,
            level: 2,
            modifiers: {},
            description: "Slightly increases invulnerability window.",
            skill: 68,
            skillName: "Evade Window"
        },
        {
            id: 260,
            level: 1,
            modifiers: {},
            description: "One extra consumable herb item per gather.",
            skill: 86,
            skillName: "Botanist"
        }
    ]

    return (
        <FlatList
            data={playerSkills}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                let matchSkill = skills.filter(skill => skill.name === item.skillName)
                return (
                    <TouchableOpacity
                        style={index % 2 === 0 ? styles.statsOn : styles.statsOff}
                        onPress={() => {
                            setActualSkill(item)
                            setSkillModalVisible(true)
                        }}>
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
                    </TouchableOpacity>
                )
            }}
        />

    )
}

export default Skills