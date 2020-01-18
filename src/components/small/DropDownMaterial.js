import React, {Component} from 'react';
import {Dropdown} from 'react-native-material-dropdown';

const defaultProps = {
  dropdownOffset: {top: 0, left: 0},
};
const DropDownMaterial = props => {
  const onChangeHandle = (value, index, data) => {
    // console.log(value);
    // console.log(index);
     console.log(data);
    props.selected(value, index);
  };
  return (
    <Dropdown
      {...defaultProps}
      containerStyle={{paddingTop: 20}}
      label={props.label}
      data={props.data}
      onChangeText={onChangeHandle}
    />
  );
};
export default DropDownMaterial;
