import react from 'react'
import { StyleSheet } from 'react-native'

const primaryColor = '#1b8cff'
const secondColor = '#66b3ff'
const white = '#f0f0f0'

const styles = StyleSheet.create({
    list: {
        width: '95%'
    },

    td: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderStyle: 'solid',
        borderRadius: 7,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        fontFamily: 'Roboto_400Regular',
        marginBottom: 7,
    },

    position: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
        color: primaryColor,
        alignContent: 'flex-start',
        width: 20,
        textAlign: 'center',
        marginRight: 7
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center'
    },

    name: {
        fontSize: 16,
        width: 130,
        flexWrap: 'wrap',
        fontFamily: 'Roboto_400Regular',
        color: primaryColor,
        marginLeft: 7
    },

    accomplished: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold',
        color: primaryColor,
        textAlign: 'right',
        width: 110,
    }
})

export { styles }