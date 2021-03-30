import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({ product }) => {
    const { ProductImages, name, ProductOptions } = product;
    const mainImage = ProductImages.filter(val => val.isMain)[0].location
    const mainPrice = ProductOptions[0].displayPrice

    return (
        <TouchableOpacity style={styles.productCardContainer}>
            <Image source={{ uri: mainImage }} style={styles.productImg} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>$ {mainPrice}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    productCardContainer: {
        width: 180,
        height: 300,
        margin: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },

    productPrice: {
        fontSize: 18,
        textAlign: 'center'
    },

    productInfo: {
        margin: 10,
        fontSize: 20,
    },
    productImg: {
        width: 180,
        height: 180
    },
})

export default ProductCard;