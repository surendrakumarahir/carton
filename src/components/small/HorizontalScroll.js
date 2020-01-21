import {ScrollView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';

const HorizontalScroll = props => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.default}>
      {props.children}
    </ScrollView>
  );
};
export default HorizontalScroll;

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: wp(0),
  },
});
