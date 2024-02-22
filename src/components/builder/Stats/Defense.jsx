import { View, Text, Image, ScrollView } from "react-native"
import { styles } from "./StatsStyle"
import BarStat from "./BarStat"

function Defense({ health, stamina, baseDefense, maxDefense, augDefense, resFire, resWater, resIce, resThunder, resDragon }) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <BarStat StateOn="On" text="Health : " value={health} image={require("../../../assets/images/icons/health-icon.png")} />
            <BarStat StateOn="Off" text="Stamina : " value={stamina} image={require("../../../assets/images/icons/stamina-icon.png")} />
            <BarStat StateOn="On" text="Defense : " value={`${baseDefense} | ${maxDefense} | ${augDefense}`} image={require("../../../assets/images/icons/defense-icon.png")} />
            <BarStat StateOn="Off" text="Fire Resistance : " value={resFire} image={require("../../../assets/images/icons/fire-icon.png")} />
            <BarStat StateOn="On" text="Water Resistance : " value={resWater} image={require("../../../assets/images/icons/water-icon.png")} />
            <BarStat StateOn="Off" text="Ice Resistance : " value={resIce} image={require("../../../assets/images/icons/ice-icon.png")} />
            <BarStat StateOn="On" text="Thunder Resistance : " value={resThunder} image={require("../../../assets/images/icons/thunder-icon.png")} />
            <BarStat StateOn="Off" text="Dragon Resistance : " value={resDragon} image={require("../../../assets/images/icons/dragon-icon.png")} />

        </ScrollView>
    )
}

export default Defense