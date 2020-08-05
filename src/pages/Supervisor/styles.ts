import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    td: {
        borderWidth: 1,
        width: '100%',
        borderColor: '#000',
        borderStyle: 'solid',
        borderRadius: 7,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },

    position: {
        fontSize: 16,
        backgroundColor: 'red'
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: 'green'
    },

    name: {
        fontSize: 16,
        width: '50%',
        flexWrap: 'wrap',
        backgroundColor: 'blue'
    },

    accomplished: {
        fontSize: 16,
        backgroundColor: 'yellow'
    }
})