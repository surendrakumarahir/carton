import {Image, Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const ProductCard = ({navigation, name, image, imagePath}) => {
    return (
        
        <View style={styles.featureProduct}>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                    <Image
                        style={styles.featureImage}
                        source={{
                            uri: imagePath + '/' + image,
                        }}
                    />
                    <Text style={styles.name}>{name}</Text>
                    </TouchableOpacity>
                </View>
       
       
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    featureProduct: {
        width: (width - 60) / 3,
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#e1dfe0',
        paddingTop: 0,
        paddingBottom: 10,
        marginBottom: 15,
    },
    featureImage: {
        width: 80,
        height: 70,
    },
    name: {
        fontSize: 14,
        width: 70,
        textAlign: 'center',
    },
});
