import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const PlanItem = ({ props, onDeletePlan }) => {

    return (
        <TouchableHighlight underlayColor={'#adadad'} activeOpacity={0.5} key={props.index} onPress={() => onDeletePlan(props.index)}>
            <View style={styles.planItem} key={props.index}>
                <Text style={styles.index}>{props.index + 1}</Text>
                <Text style={styles.planText}>{props.item.value}</Text>
            </View>
        </TouchableHighlight>)
}

const styles = StyleSheet.create({
    index: {
        width: '7%',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'black'
    },

    planItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        alignItems: 'center',
        borderColor: '#adadad',
        borderBottomWidth: 1,
        textAlign: 'center'
    },

    planText: {
        width: '85%',
        textAlign: 'center'
    },

})
export default PlanItem