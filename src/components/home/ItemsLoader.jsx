import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemsLoader = ({ name, type }) => {
    return (
        <View style={styles.container}>
            <Text>{name} : </Text>
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
    }, load: {
        color: "red"
    }, done: {
        color: "green"
    }
})