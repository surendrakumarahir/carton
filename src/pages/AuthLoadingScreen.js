import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
//import  AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //  const userToken = await AsyncStorage.getItem('userToken');
    //const userToken = await this.props.app.token;
    const userToken = '';
    // console.log("userData", userToken);
    //    userToken ? console.log('loken exist') :
    //      console.log('not exit')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    app: state.app,
  };
};
export default connect(
  mapStateToProps,
  null,
)(AuthLoadingScreen);
