import React from 'react'
import { FlatList } from 'react-native'
import { styles } from './style'

import { renderItem } from './renderItem'

interface ItemInterface {
    cod: number,
    name: string,
    accomplished: number,
    image_url: string
}

const Lista = (props: ItemInterface[]) => {
    return (
        <FlatList
            style={styles.list}
            data={props}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={item => String(item.cod)}
        />
    )
}

export { Lista }