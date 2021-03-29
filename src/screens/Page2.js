import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Page2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                Hi Page 2
      </Text>
            <Button title='Back to Home' onPress={() => navigation.navigate('main Page')} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default Page2;