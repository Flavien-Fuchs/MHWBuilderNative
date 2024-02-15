import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./StatsStyle"
import { useState } from "react";
import Defense from "./Defense";
import Attack from "./Attack";
import Skills from "./Skills";

function Stats({
    health,
    stamina,
    baseDefense,
    maxDefense,
    augDefense,
    resFire,
    resWater,
    resIce,
    resThunder,
    resDragon,
    attack,
    elementalAttack,
    affinity,
    criticalBoost,
    sharpness,
    playerSkills,
    skills
}) {

    const [statsPages, setStatsPages] = useState("Defense")

    return (
        <View style={styles.globalContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setStatsPages("Defense")}>
                    {statsPages === "Defense" ? (
                        <Text style={styles.buttonActive}>Defense</Text>
                    ) : (
                        <Text style={styles.button}>Defense</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStatsPages("Attack")}>
                    {statsPages === "Attack" ? (
                        <Text style={styles.buttonActive}>Attack</Text>
                    ) : (
                        <Text style={styles.button}>Attack</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStatsPages("Skills")}>
                    {statsPages === "Skills" ? (
                        <Text style={styles.buttonActive}>Skills</Text>
                    ) : (
                        <Text style={styles.button}>Skills</Text>
                    )}
                </TouchableOpacity>
            </View>
            {statsPages === "Defense" && <Defense
                health={health}
                stamina={stamina}
                baseDefense={baseDefense}
                maxDefense={maxDefense}
                augDefense={augDefense}
                resFire={resFire}
                resWater={resWater}
                resIce={resIce}
                resThunder={resThunder}
                resDragon={resDragon}
            />}
            {statsPages === "Attack" && <Attack
                attack={attack}
                elementalAttack={elementalAttack}
                affinity={affinity}
                criticalBoost={criticalBoost}
                sharpness={sharpness}
            />}
            {statsPages === "Skills" && <Skills playerSkills={playerSkills} skills={skills} />}
        </View>
    )

}

export default Stats