import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: colors.bgStat
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,

    },
    descriptionText: {
        color: 'black',
        fontStyle: "italic",
        textAlign: 'center',
        marginBottom: 15,
    },
    listText: {
        marginBottom: 15,
        textAlign: 'left',
    },
    listTextActive: {
        color: colors.bgStat,
        marginBottom: 15,
        textAlign: 'left',
    },
    flat: {
        flexGrow: 0,
    }
});