import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductCard from './ProductCard';
import React from 'react';

const ProductGrid = ({title, data, imagePath}) => {
  return (
    <View>
      <Text style={styles.featureLabel}>{title}</Text>
      <View style={{}}>
        <FlatList
          columnWrapperStyle={styles.flatList}
          data={data}
          renderItem={({item}) => (
            <ProductCard name={item.name} image={item.image} imagePath={imagePath} />
          )}
          keyExtractor={(item, index) => index}
          numColumns={3}
        />
      </View>
    </View>
  );
};
export default ProductGrid;

const styles = StyleSheet.create({
  featureLabel: {
    color: '#e30613',
    fontSize: 20,
    marginVertical: 10,
  },

  flatList: {
    flex: 1,
  },
});
