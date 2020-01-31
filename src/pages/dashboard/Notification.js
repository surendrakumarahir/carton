import * as React from 'react';
import {List} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';

class Notification extends React.Component {
  render() {
    return (
      <List.Section>
        <TouchableOpacity>
          <List.Item
            style={styles.listItem}
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="bell" />}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <List.Item
            style={styles.listItem}
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="bell" />}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <List.Item
            style={styles.listItem}
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="bell" />}
          />
        </TouchableOpacity>
      </List.Section>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: '#f1e7d7',
    marginBottom: 2,
  },
});
