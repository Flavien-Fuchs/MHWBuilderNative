import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './WeaponsStyle';
import WeaponsSharpness from './WeaponsSharpness';
import { colors } from '../../../../utils/colors';

export const WeaponsItem = ({ item, handleWeapon }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleWeapon(item)}>
      <View style={styles.globalInfos}>
        <Text style={styles.paragraphList}>{item.name}</Text>
        <Text style={styles.rarity}>Rarity {item.rarity}</Text>
      </View>
      <View style={styles.detailsInfos}>
        {!item.assets ? (
          <Image
            source={{ uri: "../../../../src/images/nullArmor.png" }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        ) : item?.assets?.image ? (
          <Image
            source={{
              uri: item.assets.image,
            }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        ) : (
          <Image
            source={{ uri: item.assets.icon }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        )}

        <View style={styles.stats}>
          <Text style={styles.text}>Attack : {item.attack.display}</Text>
          {item.elements.length > 0 && (
            <Text style={styles.text}>
              Element : {item?.elements[0]?.damage} ({item?.elements[0]?.type})
            </Text>
          )}
          <Text style={styles.text}>
            Affinity :{" "}
            {item.attributes.affinity ? `${item.attributes.affinity}%` : "0%"}
          </Text>
          {item.durability && (
            <View style={styles.sharpnessContainer}>
              <Text style={styles.text}>Sharpness : </Text>
              <WeaponsSharpness
                itemWidth={item.durability[0].red / 3}
                itemColor={colors.sharpnessRed}
              />
              <WeaponsSharpness
                itemWidth={item.durability[0].orange / 3}
                itemColor={colors.sharpnessOrange}
              />
              <WeaponsSharpness
                itemWidth={item.durability[0].yellow / 3}
                itemColor={colors.sharpnessYellow}
              />
              <WeaponsSharpness
                itemWidth={item.durability[0].green / 3}
                itemColor={colors.sharpnessGreen}
              />
              <WeaponsSharpness
                itemWidth={item.durability[0].blue / 3}
                itemColor={colors.sharpnessBlue}
              />
              <WeaponsSharpness
                itemWidth={item.durability[0].white / 3}
                itemColor={colors.sharpnessWhite}
              />
              <WeaponsSharpness
                itemWidth={item.durability[0].purple / 3}
                itemColor={colors.sharpnessPurple}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );