import React from 'react';
import {View, Text} from 'react-native';
import {Container, Toast} from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';

//components
import Top from '../components/small/Top';
import {connect} from 'react-redux';
import {forgotPasswordSaveOtpToken} from '../actions';
import styles from './App';
import StatusBarBackground from '../components/nav/StatusBarBackground';
class VarifiyEmail extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hasError: false,
      errorText: '',
      showToast: false,
      data: [],
    };
  }

  componentDidMount() {
    console.log(this.props.forgotPassword);
    Toast.show({
      text: this.props.forgotPassword.message,
      buttonText: 'Okay',
      type: 'success',
      position: 'top',
      duration: 3000,
    });
  }

  onFulfill = code => {
    //console.log(code);
    // console.log(this.props.navigation.getParam('email'));
    // this.props.navigation.navigate('ResetPassword', {
    //   email: this.props.navigation.getParam('email'),
    //   code: code,
    // });
    this.props.forgotPasswordSaveOtpToken({
      user_id: this.props.forgotPassword.user_id,
      user_otp: code,
    });
  };

  goBack = () => {
    this.props.navigation.goBack();
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
          <Top title="Confirm OTP" goBack={() => this.goBack()} />
        </View>
        <View style={styles.halfTop}>
          <CodeInput
            activeColor="rgba(49, 180, 4, 1)"
            inactiveColor="rgba(49, 180, 4, 1.3)"
            ref="codeInputRef1"
            secureTextEntry
            className={'border-b'}
            space={5}
            size={30}
            inputPosition="center"
            containerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            codeLength={6}
            onFulfill={code => this.onFulfill(code)}
          />
          {this.state.hasError ? (
            <Text
              style={{color: '#c0392b', textAlign: 'center', marginTop: 10}}>
              {this.state.errorText}
            </Text>
          ) : null}
          {this.renderMessages()}
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
  {forgotPasswordSaveOtpToken},
)(VarifiyEmail);
