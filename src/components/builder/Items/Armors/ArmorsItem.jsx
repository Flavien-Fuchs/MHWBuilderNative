import { Image, Text, TouchableOpacity, View } from "react-native";
import ResistanceItem from "./ResistanceItem";
import { styles } from "./ArmorsStyle";

const ArmorsItem = ({ item, handleArmor, type }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleArmor(item, type)}
    >
      <View style={styles.globalInfos}>
        <Text style={styles.paragraphList}>{item.name}</Text>
        <Text style={styles.rarity}>Rarity {item.rarity}</Text>
      </View>
      <View style={styles.detailsInfos}>
        {!item.assets ? (
          <Image
            source={require("../../../../assets/images/nullArmor.png")}
            style={styles.armorImage}
            resizeMethod="resize"
          />
        ) : item.assets.imageMale ? (
          <Image
            source={{ uri: item.assets.imageMale }}
            style={styles.armorImage}
            resizeMethod="resize"
          />
        ) : (
          <Image
            source={{ uri: item.assets.imageFemale }}
            style={styles.armorImage}
            resizeMethod="resize"
          />
        )}

        <View style={styles.stats}>
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/defense-icon.png")}
            label={"Defense"}
            value={`${item.defense.base} | ${item.defense.max} | ${item.defense.augmented}`}
          />

          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/fire-icon.png")}
            label={"Fire Resist"}
            value={item.resistances.fire}
          />
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/water-icon.png")}
            label={"Water Resist"}
            value={item.resistances.water}
          />
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/ice-icon.png")}
            label={"Ice Resist"}
            value={item.resistances.ice}
          />
          <ResistanceItem
            iconSrc={require("../../../../assets/images/icons/thunder-icon.png")}
            label={"Thunder Resist"}
            value={item.resistances.thunder}
          />
          <ResistanceItem
            iconSrc={require(`../../../../assets/images/icons/dragon-icon.png`)}
            label={"Dragon Resist"}
            value={item.resistances.dragon}
          />
        </View>
      </View>
      {item.skills && item.skills.length > 0 && (
        <View>
          <Text style={styles.skillsList}>Skills list</Text>
          <View style={styles.hideSkills}>
            {item.skills.map((skill, index) => (
              <Text key={index} style={styles.text}>
                {skill.skillName} - Level : {skill.level}
              </Text>
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  export default ArmorsItem