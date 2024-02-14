import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './ItemsLoaderStyle'


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