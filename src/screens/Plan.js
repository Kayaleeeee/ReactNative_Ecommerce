import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PlanInput from '../components/PlanInput';
import PlanItem from '../components/PlanItem';

const Plan = () => {
    const [enterPlan, setEnterPlan] = useState('')
    const [planList, setPlanList] = useState([])
    const [displayModal, setDisplayModal] = useState(false)

    const planHandler = (plan) => {
        setEnterPlan(plan)
    }

    const onAddPlan = () => {
        if (!enterPlan) {
            return alert('no content')
        }
        // setPlanList([...planList, enterPlan])
        setPlanList([...planList, { value: enterPlan }])
        setDisplayModal(false)
        return setEnterPlan('')
    }

    const onDeletePlan = (ind) => {
        let newList = planList.filter((val, index) => { return index !== ind })
        setPlanList(newList)
    }

    return (
        <View>
            <Text style={defaultStyle.titleText}>PLAN IT</Text>
            <Button title='Add Todo' onPress={() => setDisplayModal(true)} />

            <PlanInput onAddPlan={onAddPlan} enterPlan={enterPlan} planHandler={planHandler} displayModal={displayModal} />

            {/* /Scroll view==> always render all the items  */}
            <FlatList data={planList}
                renderItem={itemData => <PlanItem props={itemData} onDeletePlan={onDeletePlan} key={itemData.index} />}>
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
})

export default Plan;