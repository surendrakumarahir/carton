import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Container} from 'native-base';

//components
import Top from '../components/small/Top';
import {TextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {forgotPasswordSaveUserId} from '../actions';
import styles from './App';
import StatusBarBackground from '../components/nav/StatusBarBackground';
const tintColor = 'rgb(72, 35, 130)';
class Forgot extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hasError: false,
      errorText: '',
      data: [],
    };
  }

  onSubmitPress = () => {
    // this.props.navigation.navigate('VarifiyEmail', {
    //   email: this.state.email,
    // });
    this.props.forgotPasswordSaveUserId({email: this.state.email});
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
          <Top title="Forgot Password" goBack={() => this.goBack()} />
        </View>

        <View style={styles.halfTop}>
          <View style={{width: 330}}>
            <TextField
              // error="name in"
              autoCapitalize="none"
              tintColor={tintColor}
              lineWidth={1}
              label="Email"
              onChangeText={text => this.setState({email: text})}
              value={this.state.email}
              containerStyle={styles.textField}
            />
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
              <Text onPress={() => this.onSubmitPress()}>forgot</Text>
            )}
          </View>
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
  {forgotPasswordSaveUserId},
)(Forgot);
