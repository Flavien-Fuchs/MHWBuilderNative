import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native"
import { styles } from "./SkillModalStyle"

function SkillModal({ skillModalVisible, setSkillModalVisible, actualSkill, skills }) {

    let matchSkill = skills.filter(skill => skill.name === actualSkill.skillName)

    return (
        actualSkill && (<Modal
            animationType="slide"
            transparent={true}
            visible={skillModalVisible}
            onRequestClose={() => {
                setSkillModalVisible(!skillModalVisible);
            }}>
            <TouchableOpacity style={styles.centeredView} onPress={() => setSkillModalVisible(!skillModalVisible)}>
                <View style={styles.modalView}>

                    <Text style={styles.titleText}>{actualSkill.skillName}</Text>
                    <Text style={styles.descriptionText}>{matchSkill[0].description}</Text>
                    <FlatList
                        style={styles.flat}

                        key={matchSkill[0].ranks.id}
                        data={matchSkill[0].ranks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <Text style={item.level === actualSkill.level ? styles.listTextActive : styles.listText}>
                                    Level {item.level} : {item.description}
                                </Text>
                            )
                        }}
                    />
                </View>
            </TouchableOpacity>
        </Modal>)
    )
}

export default SkillModal

