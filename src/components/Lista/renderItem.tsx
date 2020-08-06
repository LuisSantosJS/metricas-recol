import react from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './style'

interface ItemInterface {
    cod: number,
    name: string,
    accomplished: number,
    image_url: string
}

function renderItem(item: ItemInterface, index: number) {
    return (
        <TouchableOpacity style={styles.td}>
            <Text style={styles.position}>{(index + 1)}</Text>

            <Image style={styles.image} source={{
                uri: item.image_url
            }}/>

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.accomplished}>R$ {item.accomplished}mil</Text>
        </TouchableOpacity>
    )
}

export { renderItem }