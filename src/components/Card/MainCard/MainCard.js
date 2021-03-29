import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainCard = ({ title, imgUrl, onPress }) => {
    return (
        <TouchableOpacity style={styles.mainCardContainer} onPress={onPress}>
            <ImageBackground source={imgUrl} style={styles.mainCardImage}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    mainCardContainer: {
        width: 350,
        height: 180,
        backgroundColor: 'black',
        shadowColor: "#000",
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden'
    },

    mainCardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        justifyContent: "center",

    },

    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        zIndex: 5,
        textAlign: 'right',
        paddingRight: '5%'
    }
})

export default MainCard;