import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Container, Toast} from 'native-base';

//components
import Top from '../components/small/Top';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {resetPassword} from '../actions';
import styles from './App';
import StatusBarBackground from '../components/nav/StatusBarBackground';
const tintColor = 'rgb(72, 35, 130)';
class ResetPassword extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
      hasError: false,
      errorText: '',
      icEye: 'visibility-off',
      isPassword: true,
      data: [],
    };
  }

  componentDidMount(): void {
    Toast.show({
      text: this.props.forgotPassword.message,
      buttonText: 'Okay',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
  }

  onSubmitPress = () => {
    const {password, passwordConfirm} = this.state;
    password === passwordConfirm
      ? this.props.resetPassword({
          user_id: this.props.forgotPassword.user_id,
          otp_token:this.props.forgotPassword.otp_token,
          password: password,
          password_confirmation: passwordConfirm

        })
      : this.setState({
          hasError: true,
          errorText: 'Confirm Password Should be match to Password Field',
        });
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  changePwdType = () => {
    const {isPassword} = this.state;
    // set new state value
    this.setState({
      icEye: isPassword ? 'visibility' : 'visibility-off',
      isPassword: !isPassword,
    });
  };

  renderMessages() {
    const {error, success} = this.props;
    if (error) {
      return (
        <Text style={{color: '#cc0818', fontSize: 15, marginTop: 20}}>
          {error}
        </Text>
      );
    }

    if (success) {
      return (
        <Text style={{color: '#3acc1c', fontSize: 15, marginTop: 20}}>
          {success}
        </Text>
      );
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBarBackground />
        <View style={styles.topContainer}>
          <Top title="Reset Password" goBack={() => this.goBack()} />
        </View>

        <View style={styles.halfTop}>
          <View style={{width: 330}}>
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
                label="Confirm Password"
                secureTextEntry={this.state.isPassword}
                onChangeText={text => this.setState({passwordConfirm: text})}
                value={this.state.passwordConfirm}
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
              style={{color: '#c0392b', textAlign: 'center', marginTop: 10}}>
              {this.state.errorText}
            </Text>
          ) : null}
          {this.renderMessages()}
          <View style={{marginTop: 30, width: 300}}>
            {this.props.loading ? (
              <ActivityIndicator />
            ) : (
                <Text onPress={() => this.onSubmitPress()}>reset</Text>
            )}
          </View>
        </View>

      </Container>
    );
  }
}
const mapStateToProps = ({app}) => {
  const {error, success, loading, forgotPassword} = app;
  return {error, success, loading, forgotPassword};
};
export default connect(
  mapStateToProps,
  {resetPassword},
)(ResetPassword);
