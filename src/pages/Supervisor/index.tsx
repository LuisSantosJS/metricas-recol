import React from 'react'
import { Text, Image, TouchableOpacity, View, FlatList } from 'react-native'
import { styles } from './styles'
import { Lista } from '../../components/Lista'

// Temporario
interface ItemInterface {
    cod: number,
    name: string,
    accomplished: number,
    image: string
}

const data:ItemInterface[] = [
    { "cod": 1515 ,"name": "Luís Antônio", "accomplished": 164543, "image": "https://avatars1.githubusercontent.com/u/35160032?s=460&u=c2fd8dd4d7356247dafc16dc5ac823721b7bc9bd&v=4"},
    { "cod": 1516 ,"name": "Marlon Henrique", "accomplished": 65409, "image": "https://avatars1.githubusercontent.com/u/35160032?s=460&u=c2fd8dd4d7356247dafc16dc5ac823721b7bc9bd&v=4"},
]

function Supervisor() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageHeaderContainer}>
                    <Image style={styles.imageHeader} source={{
                        uri: 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/s150x150/66719531_338580240364931_6633851656125546496_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_ohc=FJrkRTiSKlwAX_mg62E&oh=4472ab1e3406c43e0bcf8433118c0eaf&oe=5F551E40'
                    }}/>
                </View>

                <Text style={styles.headerTitle}>Edson Carlos</Text>
                <Text style={styles.headerText}>Meta R$ 13430 | Realizado: R$2435 | 15%</Text>
            </View> 

            <View style={styles.main}>
                <Lista data={data} />
            </View>
        </View>
    )
}

export { Supervisor }