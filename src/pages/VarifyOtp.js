import React from 'react';
import {View, Text} from 'react-native';
import {Container, Toast} from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';

//components
import Top from '../components/small/Top';
import {connect} from 'react-redux';
import {registerCompany} from '../actions';
import styles from './App';
import StatusBarBackground from '../components/nav/StatusBarBackground';
class VarifiyOtop extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorText: '',
      showToast: false,
      data: [],
    };
  }

  onFulfill = code => {
    const data = {
      email: this.props.navigation.getParam('email'),
      name: this.props.navigation.getParam('name'),
      phone: this.props.navigation.getParam('phone'),
      commercial_registration_number: this.props.navigation.getParam(
        'commercial_registration_number',
      ),
      municipal_license_number: this.props.navigation.getParam(
        'municipal_license_number',
      ),
      value_added_tax: this.props.navigation.getParam('value_added_tax'),
      certifications: this.props.navigation.getParam('certifications'),
      location: this.props.navigation.getParam('location'),
      otp_token: this.props.registrationToken.otp_token,
      otp: code,
    };
    //console.log('data', data);
    this.props
      .registerCompany(data)
      .then(response => {
        this.props.navigation.navigate('CreatePassword', {
          ...data,
          user_id: response.user_id,
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
  const {error, success, loading, registrationToken} = app;
  return {error, success, loading, registrationToken};
};
export default connect(
  mapStateToProps,
  {registerCompany},
)(VarifiyOtop);
