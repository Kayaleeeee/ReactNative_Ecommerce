import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { onLoadCategoryList } from '../../../api/market/marketApi';
import ProductCard from '../../components/Card/ProductCard.js/ProductCard';
import defualtStyle from '../../constant/defaultStyle'

const Market = () => {
    const [categoryList, setCategoryList] = useState([])

    let getCategoryList = (async () => await onLoadCategoryList());

    useEffect(async () => {
        let data = await getCategoryList();
        return () =>
            setCategoryList(data)
    }, [])


    return (
        <ScrollView contentContainerStyle={defualtStyle.pageContainer}>
            <Text style={defualtStyle.pageTitle}>Market</Text>
            <ScrollView horizontal={true}>
                {categoryList.map((category, ind) => {
                    return <Text style={styles.category} key={ind}>{category.name}</Text>
                })}
            </ScrollView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({

})

export default Market;