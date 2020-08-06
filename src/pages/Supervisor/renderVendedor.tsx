import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import { styles } from './styles'

interface ItemInterface {
    cod: number,
    name: string,
    accomplished: number,
    image: string
}

function renderVendedor(item: ItemInterface, index: number) {
    return (
        <TouchableOpacity style={styles.td}>
            <Text style={styles.position}>{(index + 1)}</Text>

            <Image style={styles.image} source={{
                uri: item.image
            }}/>

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.accomplished}>R$ {item.accomplished}mil</Text>
        </TouchableOpacity>
    )
}

export { renderVendedor }