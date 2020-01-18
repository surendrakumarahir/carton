import React from 'react';
import {Image, View} from 'react-native';

const LoginBottomBanner = () => {
  return (
    <Image
      style={{flex: 1, width: '100%',  resizeMode: 'stretch'}}
      source={require('../../asset/login-banner2.png')}
    />
  );
};
export default LoginBottomBanner;
