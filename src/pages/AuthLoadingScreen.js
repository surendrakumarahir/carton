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
    const token = await this.props.token;
   // const userToken = '';
    // console.log("userData", userToken);
    //    userToken ? console.log('loken exist') :
    //      console.log('not exit')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(token ? 'App' : 'Auth');
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
const mapStateToProps = ({app}) => {
  const {token} = app;
  return {
    token: token,
  };
};
export default connect(
  mapStateToProps,
  null,
)(AuthLoadingScreen);
