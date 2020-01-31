import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Button,
} from 'native-base';
class Language extends React.Component {
  state = {
    checked: 'englist',
  };
  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <Left>
              <Text>English</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.checked == 'englist' ? true : false}
                onPress={() => {
                  this.setState({checked: 'englist'});
                }}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Spanish</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.checked == 'spanish' ? true : false}
                onPress={() => {
                  this.setState({checked: 'spanish'});
                }}
              />
            </Right>
          </ListItem>
          <View style={styles.boxButton}>
            <Button warning style={styles.salectLanguage}>
              <Text style={styles.buttonText}>Save</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boxButton: {width: '100%', marginTop: 20},
  salectLanguage: {
    width: 200,
    height: 60,
    alignSelf: 'center',
    borderRadius: 7,
  },
  buttonText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 17,
  },
});
