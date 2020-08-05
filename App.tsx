import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Supervisor } from './src/pages/Supervisor'

export default function App() {
    return (
        <View style={styles.container}>
            <Supervisor />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        padding: 10,
    }
});
