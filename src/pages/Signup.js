import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Item,
  Input,
  Button,
  Toast,
  Text as TextNew,
} from 'native-base';

//components
import Top from '../components/small/Top';
import StatusBarBackground from '../components/nav/StatusBarBackground';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {OutlinedTextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {saveUserDataLogin} from '../actions';
import styles from './App';
import {ScrollView} from 'react-navigation';
const tintColor = 'rgb(48,38,130)';
class Signup extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      hasError: false,
      errorText: '',
      icEye: 'visibility-off',
      isPassword: true,
      data: [],
    };
  }

  onSubmitPress = () => {
    this.props
      .saveUserDataLogin({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        mobile: '8883838',
        app_token: 'Nj^0=)&$Xmq@3',
        user_type: 'seller',
      })
      .then(response => {
        Toast.show({
          text: response,
          buttonText: 'okey',
          type: 'success',
          position: 'bottom',
          duration: 4000,
        });
        setTimeout(() => {
          this.props.navigation.navigate('Deshboard');
        }, 1000);
      })
      .catch(error => {
        Toast.show({
          text: error,
          buttonText: 'okey',
          type: 'danger',
          position: 'bottom',
          duration: 4000,
        });
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
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} >
          <Image
            style={{width: 320, height: 150, resizeMode: 'contain'}}
            source={require('../asset/logo.png')}
          />

          <Text
            style={{
              fontSize: 24,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            Register
          </Text>
          <View style={{width: 330, marginBottom: 0}}>
            <OutlinedTextField
              // error="name in"
              autoCapitalize="none"
              tintColor={tintColor}
              textColor={tintColor}
              baseColor={tintColor}
              lineWidth={1}
              label="Name"
              onChangeText={text => this.setState({name: text})}
              value={this.state.name}
              containerStyle={styles.textField}
            />
            <OutlinedTextField
              // error="name in"
              autoCapitalize="none"
              tintColor={tintColor}
              textColor={tintColor}
              baseColor={tintColor}
              lineWidth={1}
              label="Email"
              onChangeText={text => this.setState({email: text})}
              value={this.state.email}
              containerStyle={styles.textField}
            />

            <View style={{marginTop: 0}}>
              <OutlinedTextField
                tintColor={tintColor}
                lineWidth={1}
                textColor={tintColor}
                baseColor={tintColor}
                label="Password"
                secureTextEntry={this.state.isPassword}
                onChangeText={text => this.setState({password: text})}
                value={this.state.password}
                containerStyle={styles.textField}
              />
              <Icon
                style={styles.icon}
                name={this.state.icEye}
                onPress={this.changePwdType}
              />
            </View>
            <View>
              <OutlinedTextField
                tintColor={tintColor}
                lineWidth={1}
                textColor={tintColor}
                baseColor={tintColor}
                label="Password Confirmation"
                secureTextEntry={this.state.isPassword}
                onChangeText={text => this.setState({password_confirm: text})}
                value={this.state.password_confirm}
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
          <View style={{marginTop: 30, width: 330, alignItems: 'center'}}>
            {/*{this.props.loading ? (*/}
            {/*  <ActivityIndicator />*/}
            {/*) : (*/}
            <Button
              style={{height: 55, backgroundColor: '#e30613'}}
              onPress={() => this.onSubmitPress()}
              rounded
              danger>
              <TextNew style={styles.signup}>Submit</TextNew>
            </Button>
            {/*)}*/}

            <TouchableOpacity
              style={styles.textBottom}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textBottomText}>
                Already Have accout ? Login{' '}
              </Text>
            </TouchableOpacity>
            {/*<View*/}
            {/*  style={{*/}
            {/*    width: 330,*/}
            {/*    borderBottomColor: '#ccc',*/}
            {/*    borderBottomWidth: 1,*/}
            {/*    paddingTop: 30,*/}
            {/*  }}*/}
            {/*/>*/}
            {/*/!*<View style={styles.textBottom}>*!/*/}
            {/*  <Text style={styles.textBottomText}>Don't have an account ? </Text>*/}
            {/*</View>*/}
            {/*<Button*/}
            {/*  style={{height: 55, backgroundColor: '#302682'}}*/}
            {/*  onPress={() => this.props.navigation.navigate('Signup')}*/}
            {/*  rounded*/}
            {/*  danger>*/}
            {/*  <TextNew style={styles.signup}>Sign Up</TextNew>*/}
            {/*</Button>*/}
          </View>
        </ScrollView>
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
  {saveUserDataLogin},
)(Signup);
//export default Signup;
