import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Container, Item, Input, Toast} from 'native-base';

//components
import GradientButton from '../components/button/GradientButton';
import Top from '../components/small/Top';
import LoginBottomBanner from '../components/small/LoginBottomBanner';
import StatusBarBackground from '../components/nav/StatusBarBackground';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {setLoginCredentials} from '../actions';
import styles from './App';
const tintColor = 'rgb(72, 35, 130)';
class CreatePassword extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password_confirmation: '',
      user_id: '',
      hasError: false,
      errorText: '',
      icEye: 'visibility-off',
      isPassword: true,
      data: [],
    };
  }

  componentDidMount(): void {
    this.setState({
      username: this.props.navigation.getParam('email'),
      user_id: this.props.navigation.getParam('user_id'),
    });
    console.log('username', this.props.navigation.getParam('email'));
  }

  onSubmitPress = () => {
    const {user_id, password, password_confirmation} = this.state;
    if (password === '' || password_confirmation === '') {
      this.setState({hasError: true, errorText: 'Please fill all fields !'});
      return;
    } else if (password !== password_confirmation) {
      this.setState({
        hasError: true,
        errorText: 'Password and Confirm password should be same.',
      });
      return;
    } else {
      this.setState({hasError: false});
    }
    this.props
      .setLoginCredentials({
        user_id: user_id,
        password: password,
        password_confirmation: password_confirmation,
      })
      .then(response => {
        Toast.show({
          text: response.message,
          buttonText: 'Okay',
          type: 'success',
          position: 'top',
          duration: 4000,
        });
      })
      .catch(error => {
        Toast.show({
          text: error,
          buttonText: 'Okay',
          type: 'danger',
          position: 'bottom',
          duration: 4000,
        });
      });
  };

  changePwdType = () => {
    const {isPassword} = this.state;
    // set new state value
    this.setState({
      icEye: isPassword ? 'visibility' : 'visibility-off',
      isPassword: !isPassword,
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Text style={{marginTop: 10}}></Text>
        <StatusBarBackground />
        <View style={styles.topContainer}>
          <Top title="User Details" back={false} />
        </View>

        <View style={styles.halfTop}>
          <View style={{width: 330}}>
            <TextField
              editable={false}
              autoCapitalize="none"
              tintColor={tintColor}
              lineWidth={1}
              label="User Name"
              onChangeText={text => this.setState({username: text})}
              value={this.props.navigation.getParam('email')}
              containerStyle={styles.textField}
            />
            <TextField
              tintColor={tintColor}
              lineWidth={1}
              label="Password"
              secureTextEntry={this.state.isPassword}
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}
              containerStyle={styles.textField}
            />
            <View>
              <TextField
                tintColor={tintColor}
                lineWidth={1}
                label="Password Confirm"
                secureTextEntry={this.state.isPassword}
                onChangeText={text => this.setState({password_confirmation: text})}
                value={this.state.password_confirmation}
                containerStyle={styles.textField}
              />
              <Icon
                style={styles.icon}
                name={this.state.icEye}
                onPress={this.changePwdType}
              />
            </View>
          </View>
          {this.state.hasError ? (
            <Text
              style={{color: '#c0392b', textAlign: 'center', marginTop: 30}}>
              {this.state.errorText}
            </Text>
          ) : null}
          <View style={{marginTop: 30, width: 300}}>
            {this.props.loading ? (
              <ActivityIndicator />
            ) : (
              <GradientButton
                onSubmitPress={() => this.onSubmitPress()}
                title="Submit"
              />
            )}
          </View>
        </View>
        <View style={styles.halfBottom}>
          <LoginBottomBanner />
        </View>
      </Container>
    );
  }
}
const mapStateToProps = ({app}) => {
  const {error, success, loading} = app;
  return {error, success, loading};
};
export default connect(
  mapStateToProps,
  {setLoginCredentials},
)(CreatePassword);
