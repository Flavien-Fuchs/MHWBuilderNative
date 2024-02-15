import { View, Text, FlatList } from "react-native"
import { styles } from "./StatsStyle"

function Skills({ skills }) {

    const playerSkill = [
        {
            id: 159,
            level: 3,
            modifiers: {},
            description: "Makes it easier to mount monsters and down mounted monsters.",
            skill: 49,
            skillName: "Master Mounter"
        },
        {
            id: 252,
            level: 1,
            modifiers: {},
            description: "While active, reduces damage taken by 15%.",
            skill: 84,
            skillName: "Divine Blessing"
        }
    ]

    /////////////////////////////////

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={playerSkill}
            keyExtractor={(item) => item.id}
            renderItem={({ item }, index) => {
                console.log(item)
                return (
                    <View style={index % 2 === 0 ? styles.statsOn : styles.statsOff}>
                        <Text style={styles.text}>{item.skillName} coucou </Text>
                        <Text style={styles.text}>{item.level} coucou </Text>
                    </View>
                )
            }}
        />

    )
}

export default Skills

{/* {skills.map(skill => {
                    if (skill.name === skillName) {
                        return (
                            <FlatList
                                key={skill.id}
                                data={skill.ranks}
                                renderItem={renderSkill}
                                keyExtractor={(skill) => skill.id}
                            />
                        )
                    }
                })} */}