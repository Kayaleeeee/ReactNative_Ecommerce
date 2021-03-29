import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
import MainCard from '../components/Card/MainCard/MainCard';
import defaultStyle from '../constant/defaultStyle';

const mainPage = ({ navigation, route }) => {
    return (<ScrollView contentContainerStyle={defaultStyle.pageContainer}>
        <Image style={styles.logoImage} source={require('enkor/assets/logo(dtb)_150px.png')} alt='logo' />
        <View style={styles.cardContainer} >
            <MainCard title='Market' imgUrl={require('enkor/assets/images/grocery.jpeg')} onPress={() => navigation.navigate('market')} />
            <MainCard title='Food Delivery' imgUrl={require('enkor/assets/images/pizza.jpeg')} />
            <MainCard title='Taxi' imgUrl={require('enkor/assets/images/taxiWeb.png')} />
        </View>
    </ScrollView>)
}

const styles = StyleSheet.create({
    mainPageContainer: {
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 100,
    },
    logoImage: {
        width: 100,
        resizeMode: 'contain',
    },
    cardContainer: {
        width: '100%',
        flexDirection: 'column',
        height: 600,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    }
})

export default mainPage;