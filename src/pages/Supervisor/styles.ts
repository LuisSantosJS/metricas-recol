import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const primaryColor = '#1b8cff'
const secondColor = '#66b3ff'
const white = '#f0f0f0'

const screen_width = Dimensions.get('window').width
const screen_height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: screen_width
    },

    header: {
        width: '95%',
        height: 200,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    imageHeader: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    headerTitle: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 28,
        color: white,
    },

    headerText: {
        color: white,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        fontStyle: 'italic'
    },

    imageHeaderContainer: {
        width: 105,
        height: 105,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#fff',
    },

    main: {
        width: screen_width,
        alignItems: 'center',
        marginTop: 7,
    },
})

export { styles }