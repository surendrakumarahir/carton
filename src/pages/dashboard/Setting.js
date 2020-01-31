import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';
class Setting extends Component {
  state = {
    notifications: false,
  };
  render() {
    return (
      <Container>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
              <Text>Notifications Mode</Text>
            </Body>
            <Right>
              <Switch
                onChange={() =>
                  this.setState({notifications: !this.state.notifications})
                }
                value={this.state.notifications}
              />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="ios-settings" />
              </Button>
            </Left>
            <Body>
              <Text>Change Password</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>Email</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
