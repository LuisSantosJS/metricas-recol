import React, { useState } from 'react'
import { FlatList, ListViewBase, TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './style'

 import { renderItem } from './renderItem'

interface ItemInterface {
    cod: number,
    name: string,
    accomplished: number,
    image_url: string
}

// function renderItem(item: ItemInterface, index: number) {
//     return (
//         <TouchableOpacity style={styles.td}>
//             <Text style={styles.position}>{(index + 1)}</Text>

//             <Image style={styles.image} source={{
//                 uri: item.image_url
//             }} />

//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.accomplished}>R$ {item.accomplished}mil</Text>
//         </TouchableOpacity>
//     )
// }

const Lista: React.FC = ({ children }) => {

    const DATA: any = children;
    return (
        <FlatList
            style={styles.list}
            data={DATA}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={item => String(item.cod)}
        />
    )
}

export default Lista;
