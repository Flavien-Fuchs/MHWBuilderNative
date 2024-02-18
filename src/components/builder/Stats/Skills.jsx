import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import { styles } from "./StatsStyle"

function Skills({ skills, playerSkills, setSkillModalVisible, setActualSkill }) {
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
                        <View style={styles.leftView}>
                            <Image
                                source={require("../../../assets/images/info.png")}
                                style={styles.imageInfo}
                            />
                            <Text style={styles.text}>{item.skillName}</Text>
                        </View>
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