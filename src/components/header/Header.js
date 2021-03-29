import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return <View style={styles.header}>
        <Image style={styles.logoImage} source={require('../../../assets/logo(dtb)_150px.png')} alt='logo' />
    </View>
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        alignItems: 'flex-start',
        alignSelf: 'center',
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 0,
    },

    logoImage: {
        marginLeft: 10,
        marginTop: 20,
        flex: 1,
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },

    headerText: {

    }
})
export default Header;
