import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoadingPage = ({ startAsync, onFinish }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../../assets/logo(dtb)_150px.png')} alt='logo' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoadingPage;