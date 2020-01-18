import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native';
const DatePickerField = props => {
  const setDate = (event, date) => {
    props.setDate(date);
  };
  return (
    <>
      {props.show && (
        <DateTimePicker
          value={props.date}
          mode={props.mode}
          is24Hour={true}
          display="default"
          onChange={setDate}
        />
      )}
    </>
  );
};
export default DatePickerField;
