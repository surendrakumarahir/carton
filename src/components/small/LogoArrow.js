import React from 'react';
import {Right} from 'native-base';
import {StyleSheet, Image} from 'react-native';

const LogoArrow = () => {
  return (
    <Right style={styles.listRight}>
      <Image
        style={styles.rightArrowImage}
        source={require('../../asset/logo-icon.png')}
      />
    </Right>
  );
};

export default LogoArrow;
const styles = StyleSheet.create({
  listRight: {
    height: 40,
    width: 40,
    borderBottomWidth: 0,
  },
  rightArrowImage: {
    marginTop:20,
    flex: 1,
    resizeMode: 'contain',
  },
});
