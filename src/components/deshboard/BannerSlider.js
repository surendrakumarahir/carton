import {Image, StyleSheet, View} from 'react-native';
import HorizontalScroll from '../small/HorizontalScroll';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BannerSlider = props => {
  return (
    <View style={{marginVertical: 20}}>
      {/*<PostHead heading="Discount Coupon Codes" />*/}
      <HorizontalScroll>
        <Image
          style={styles.bannerDesign}
          source={require('../../asset/permotions/permotion1.jpg')}
        />
        <Image
          style={styles.bannerDesign}
          source={require('../../asset/permotions/permotion2.jpg')}
        />
        <Image
          style={styles.bannerDesign}
          source={require('../../asset/permotions/permotion3.jpg')}
        />
        <Image
          style={styles.bannerDesign}
          source={require('../../asset/permotions/permotion4.jpg')}
        />
      </HorizontalScroll>
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  bannerDesign: {
    flex: 1,
    marginRight: wp(3),
    height: hp(30),
    resizeMode: 'cover',
    width: wp(70),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
