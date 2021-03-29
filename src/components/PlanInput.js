import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';

const PlanInput = (props) => {
    const { onAddPlan, enterPlan, planHandler, displayModal } = props


    return (
        <Modal animationType="slide" transparent={false} visible={displayModal}>
            <View style={styles.addTodo}>
                <TextInput placeholder='Write Something' value={enterPlan}
                    style={styles.inputStyle} onChangeText={planHandler} />
                <Button style={styles.buttonStyle} title='ADD' onPress={onAddPlan} />
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'black',
        flex: 1,
    },

    inputStyle: {
        borderColor: '#adadad',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flex: 2,
        backgroundColor: 'white'

    },

    addTodo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})

export default PlanInput