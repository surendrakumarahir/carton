import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HorizontalScroll from '../small/HorizontalScroll';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';

const CategoryBlock = (props) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.featureLabel}>categories</Text>
      <HorizontalScroll>
        {props.categoryList.map(item => {
          return (
            <View
              opacity={0.7}
              style={{position: 'relative', marginRight: wp(3)}}>
              <Image
                style={styles.categoryDesign}
                source={{
                  uri: `http://carton.imperialitforweb.com/public/uploads/category/${
                    item.image
                  }`,
                }}
              />
              <View style={styles.categoryBox}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
          );
        })}
        <View style={{marginRight: wp(3)}} key={'abk'}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Category')}
            opacity={0.7}
            style={{
              height: hp(15),
              resizeMode: 'cover',
              width: wp(25),
              borderWidth: 1,
              backgroundColor: '#fffaf1',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              borderColor: '#484848',
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#000',
                alignSelf: 'center',
              }}>
              More
            </Text>
          </TouchableOpacity>
        </View>
      </HorizontalScroll>
    </View>
  );
};

export default CategoryBlock;

const styles = StyleSheet.create({
  featureLabel: {
    color: '#e30613',
    fontSize: 20,
    marginVertical: 10,
  },
  categoryDesign: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    height: hp(15),
    resizeMode: 'cover',
    width: wp(25),
  },
  categoryBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
