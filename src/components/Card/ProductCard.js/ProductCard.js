import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <TouchableOpacity style={styles.productCardContainer}>
            {/* <Image source={imgUrl} style={styles.productInfo} />
            <View style={styles.productInfo}>

            </View> */}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    productCardContainer: {
        width: 300,
        height: 300,
    },
    productInfo: {},
    productImg: {},
})

export default ProductCard;