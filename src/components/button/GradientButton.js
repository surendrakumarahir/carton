import React from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';

const GradientButton = props => {
  const handleClick = () => {
    props.onSubmitPress();
  };
  return (
    <LinearGradient
      style={{
        borderRadius: 5,
      }}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#f9c21f', '#f46d25']}>
      <Button
        style={styles.loginButton}
        onPress={handleClick}
        transparent={true}>
        <Text style={styles.loginText}>{props.title}</Text>
      </Button>
    </LinearGradient>
  );
};
export default GradientButton;

const styles = StyleSheet.create({
  loginButton: {
    justifyContent: 'center',
    width: 270,
    alignItems: 'center',
    borderRadius: 7,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
});
