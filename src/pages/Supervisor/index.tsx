import React from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import styles from './styles'

function Supervisor() {
    return (
        <TouchableOpacity style={styles.td}>
            <Text style={styles.position}>1</Text>

            <Image style={styles.image} source={{
                uri: 'https://avatars1.githubusercontent.com/u/35160032?s=460&u=c2fd8dd4d7356247dafc16dc5ac823721b7bc9bd&v=4'
            }}/>

            <Text style={styles.name}>Luís Antônio</Text>
            <Text style={styles.accomplished}>R$ 164,5mil</Text>
        </TouchableOpacity>
    )
}

export { Supervisor }