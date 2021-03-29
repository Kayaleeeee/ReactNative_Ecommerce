import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Button, CheckBox, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './src/components/header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page2 from './src/screens/Page2';
import mainPage from './src/screens';
import Market from './src/screens/Market/Market';

const fetchFonts = () => {
    return Font.loadAsync({
        'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
        'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf')
    });
}

const Stack = createStackNavigator();

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={console.warn}
        />

    }

    return (
        <View style={styles.container}>
            <NavigationContainer >
                <View style={styles.pageContainer}>
                    <Stack.Navigator headerMode='none'>
                        <Stack.Screen name='main Page' component={mainPage} />
                        <Stack.Screen name='other Page' component={Page2} />
                        <Stack.Screen name='market' component={Market} />
                    </Stack.Navigator>

                </View>
            </NavigationContainer>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    pageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 50,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }
});
