import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ImageSlider = props => {
 const onClickImage = index => {
        props.onClickImage(index);
    }
  return (
    <View style={styles.container}>
      <SliderBox
     // resizeMode="contain"
          sliderBoxHeight={wp(50)}
        images={props.data}
        onCurrentImagePressed={index => onClickImage(index)}
      />
    </View>
  );
};
export default ImageSlider;

const styles = StyleSheet.create({
  container: {
   // flex: 1,
  },
});