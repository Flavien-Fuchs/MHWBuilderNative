import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from "../../utils/colors"


const ItemsLoader = ({ name, type }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name} : </Text>
            {!type ? (
                <Text style={styles.load}>Loading...</Text>
            ) : (
                <Text style={styles.done}>Done!</Text>
            )}
        </View>

    )
}

export default ItemsLoader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }, name: {
        color: colors.whiteColor
    }, load: {
        color: colors.redColor
    }, done: {
        color: colors.greenColor
    }
})