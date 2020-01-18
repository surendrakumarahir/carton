import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
Dimensions.get('screen').height;
const theme = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap',
  },
});

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

const TextPropsDefault = {
  tintColor: 'rgb(72, 35, 130)',
  lineWidth: 1,
  contentInset: {top: 0},
};

export {theme, buttons, TextPropsDefault, width, height};
