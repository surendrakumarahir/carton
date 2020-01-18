import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Top = props => {
  const handleClick = () => {
    props.goBack();
  };

  return (
    <>
      {props.back === false ? null : (
        <Icon
          active
          name="ios-arrow-round-back"
          style={styles.backIcon}
          onPress={handleClick}
        />
      )}

      <Text style={styles.title}>{props.title}</Text>
    </>
  );
};
export default Top;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#0a1d29',
  },
  backIcon: {
    color: '#687373',
    paddingLeft: 15,
    fontSize: 40,
  },
});
