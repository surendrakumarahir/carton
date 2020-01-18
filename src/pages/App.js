import React, {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  // topContainer: {
  //   alignItems: 'center',
  //   flex: 1,
  //   width: '100%',
  //   justifyContent: 'center',
  // },
  // halfTop: {
  //   alignItems: 'center',
  //   flex: 1,
  //   width: '100%',
  //   justifyContent: 'center',
  // },
  // halfBottom: {
  //   flex: 2,
  //   width: '100%',
  //   alignItems: 'center',
  // },
  icon: {
    position: 'absolute',
    top: 15,
    right: 10,
    fontSize: 25,
  },
  textField: {
    marginBottom: 20,
    height: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textBottom: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'center',
  },
  textBottomText: {
    marginTop: 20, marginBottom: 10, fontSize: 15
  },
  signup: {
    textAlign: 'center', fontSize: 20, width: '100%'
  }
});

export default styles;
