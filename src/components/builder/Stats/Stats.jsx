import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./StatsStyle"
import { useState } from "react";
import Defense from "./Defense";
import Attack from "./Attack";
import Skills from "./Skills";
import ButtonStats from "./ButtonStats";

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
                <ButtonStats name="Defense" setStatsPages={setStatsPages} statsPages={statsPages} />
                <ButtonStats name="Attack" setStatsPages={setStatsPages} statsPages={statsPages} />
                <ButtonStats name="Skills" setStatsPages={setStatsPages} statsPages={statsPages} />
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