import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { onLoadCategoryList, onLoadProductList } from '../../../api/market/marketApi';
import ProductCard from '../../components/Card/ProductCard.js/ProductCard';
import defualtStyle from '../../constant/defaultStyle'

const Market = () => {
    const [categoryList, setCategoryList] = useState([])
    const [productList, setProductList] = useState([])

    useEffect(() => {
        onLoadCategoryList()
            .then(res => setCategoryList(res));
        onLoadProductList().then(res => setProductList(res))
    }, [])


    return (
        <ScrollView contentContainerStyle={defualtStyle.pageContainer}>
            <Text style={defualtStyle.pageTitle}>Market</Text>
            <ScrollView horizontal={true} style={styles.categoryList}>
                {categoryList.map((category, ind) => {
                    return <Text style={styles.category} key={ind}>{category.name}</Text>
                })}
            </ScrollView>
            <View style={styles.productList}>
                {productList?.map((product, ind) => {
                    return <ProductCard product={product} key={ind} />
                })}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    categoryList: {
        marginEnd: 10,
    },

    category: {
        paddingHorizontal: 22,
        fontSize: 20,
        marginBottom: 10,
    },
    productList: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Market;