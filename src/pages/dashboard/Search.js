import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
