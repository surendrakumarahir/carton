import React from 'react';
import {Text, StyleSheet, Alert} from 'react-native';
import {Button} from 'native-base';
import {BoxShadow} from 'react-native-shadow';

const shadowOpt = {
  width: 270,
  height: 50,
  color: '#000',
  border: 2,
  radius: 25,
  opacity: 0.2,
  x: 1,
  y: 2,
  style: {marginVertical: 5},
};

const ShadowButton = props => {
  const handleClick = () => {
    props.handleClick();
   // Alert.alert('dddd');
  };
  return (
    <BoxShadow setting={shadowOpt}>
      <Button style={styles.button} onPress={() => handleClick()}>
        <Text style={styles.text}>{props.text}</Text>
      </Button>
    </BoxShadow>
  );
};

export default ShadowButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 270,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    zIndex: 99,
  },
  text: {
    fontSize: 23,
  },
});
